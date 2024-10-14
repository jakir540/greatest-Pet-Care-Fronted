/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import dynamic from 'next/dynamic';
import { toast } from "react-toastify";
import Image from "next/image";
import LoadingSpinner from "../components/pages/loadingSpinner";
import { IUserProfile } from "@/app/utils/types";
import ProfileModal from "../components/pages/ProfileModal";
// import LoadingSpinner from '../components/pages/LoadingSpinner';
// import withAuth from '@/app/utils/withAuth';

// const EditProfileModal = dynamic(() => import('../components/pages/EditProfileModal'), { ssr: false });
// const MyPosts = dynamic(() => import('./my-post/page'), { ssr: false });

const Profile = () => {
  const ProfileAvatar = "https://i.ibb.co.com/KXNrJnf/avatar.jpg";
  const [profile, setProfile] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://greatest-pet-care-backend.vercel.app/api/user/me",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        setProfile(response.data?.data);
        console.log(response.data?.data);
      } catch (err: any) {
        setError("Failed to load profile data.");
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmit = async (data: {
    name: string;
    bio: string;
    phone: string;
    profilePicture?: string;
  }) => {
    const updatedData = {
      name: data.name,
      bio: data.bio,
      phone: data.phone,
      profilePicture: data.profilePicture,
    };

    try {
      const response = await axios.put(
        "https://greatest-pet-care-backend.vercel.app/api/user/me",
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setProfile(response.data.data);
      toast.success("Profile updated successfully!");
      handleCloseModal();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        My Profile
      </h1>
      {profile ? (
        <div className="max-w-lg mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="flex flex-col items-center p-6">
            <Image
              className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-md"
              src={profile.profilePicture || ProfileAvatar}
              alt="Profile Picture"
              width={128}
              height={128}
            />
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
              {profile.name}
            </h2>
            <p className="mt-2 text-gray-600 text-center px-4">
              {profile.bio || "Pet Lover"}
            </p>
            <div className="flex space-x-8 mt-4">
              <div className="text-center">
                <span className="font-bold text-gray-800 text-lg">
                  {profile.followers.length}
                </span>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>
              <div className="text-center">
                <span className="font-bold text-gray-800 text-lg">
                  {profile.following.length}
                </span>
                <p className="text-gray-500 text-sm">Following</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              Member since: {new Date(profile.createdAt).toLocaleDateString()}
            </p>
            <div className="mt-4 text-gray-600">
              <p className="text-sm">Email: {profile.email}</p>
              <p className="text-sm">Phone: {profile.phone}</p>
            </div>
            <button
              className="mt-6 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No profile data available.</p>
      )}
      {/* Modal */}
      <ProfileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        formData={
          profile
            ? {
                name: profile.name,
                bio: profile.bio,
                phone: profile.phone,
                profilePicture: profile.profilePicture,
              }
            : null
        }
      />
      {/* <MyPosts /> */}
    </div>
  );
};

export default Profile;
