/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/pages/loadingSpinner";

const AllUser: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    const token = localStorage.getItem("authToken");
    if (!token) {
      setError("No authorization token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://greatest-pet-care-backend.vercel.app/api/user/alluser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users: " + response.statusText);
      }
      const data = await response.json();
      setUsers(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setIsDeleting(true);
      try {
        const response = await fetch(
          `https://pet-care-server-three.vercel.app/api/admin/users/${userId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to delete user.");
        }
        alert("User deleted successfully!");
        fetchUsers(); // Refresh the user list
      } catch (error) {
        console.error("Failed to delete user:", error);
        alert("Failed to delete user.");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-2xl text-center font-bold mb-6 text-blue-600">
        User Management
      </h2>
      {users && users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr className="border-b">
                <th className="p-4 text-left text-sm font-semibold">ID</th>
                <th className="p-4 text-left text-sm font-semibold">Name</th>
                <th className="p-4 text-left text-sm font-semibold">Email</th>
                <th className="p-4 text-left text-sm font-semibold">Role</th>
                <th className="p-4 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="p-4 text-sm">{user._id}</td>
                  <td className="p-4 text-sm">{user.name}</td>
                  <td className="p-4 text-sm">{user.email}</td>
                  <td className="p-4 text-sm">{user.role}</td>
                  <td className="p-4 flex space-x-2">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg">No users found.</p>
      )}
    </div>
  );
};

export default AllUser;
