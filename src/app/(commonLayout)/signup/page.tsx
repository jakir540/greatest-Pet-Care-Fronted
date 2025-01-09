/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Register = () => {
  const registerImage = "https://i.ibb.co/cyP349C/login-Image.jpg";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name || !email || !password || !phone) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://greatest-pet-care-backend.vercel.app/api/user/signup",
        {
          name,
          email,
          password,
          phone,
          role: "user",
        }
      );

      if (response.status === 200) {
        setSuccessMessage("User registered successfully");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Registration Form */}
      <div className="flex-1 flex justify-center items-center px-6 py-10 md:px-16">
        <div className="w-full max-w-md">
          <div className="bg-white p-8">
            <div className="text-center mb-8">
              <Image
                src="https://i.ibb.co/8jQ8GWq/logo.jpg"
                alt="Logo"
                width={150}
                height={50}
                className="mx-auto rounded-lg "
              />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                Join the Pet Care Community
              </h3>
              <p className="text-gray-600 text-sm">
                Sign up to give your pets the care they deserve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#015c43] text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Register
              </button>
            </form>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => (window.location.href = "/login")}
                className="text-blue-500 hover:underline text-sm"
              >
                Already have an account? Log in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Full Page Image with Text */}
      <div
        className="flex-1 hidden md:flex justify-center items-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${registerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">
            Caring for Your Pets Like Family
          </h2>
          <p className="text-lg max-w-md mx-auto">
            Join a community dedicated to keeping your furry friends happy and
            healthy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
