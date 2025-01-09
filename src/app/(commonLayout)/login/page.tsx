/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for handling error messages
  const loginImage = "https://i.ibb.co/cyP349C/login-Image.jpg";

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure client-side mounting
  }, []);

  if (!isMounted) {
    return null; // Or a loading state if you prefer
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page on submit
    setError(""); // Clear any previous errors before submitting

    try {
      const response = await axios.post(
        "https://greatest-pet-care-backend.vercel.app/api/user/login",
        {
          email,
          password,
        }
      );

      const token = response.data.data.token;
      const role = response.data.data.remainingData.role;

      if (token && role) {
        localStorage.setItem("authToken", token);

        if (role === "admin") {
          window.location.href = "/admin";
        } else if (role === "user") {
          window.location.href = "/";
        } else {
          throw new Error("Invalid user role");
        }
      } else {
        throw new Error("Missing token or role in the response");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Login failed";
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Login Form */}
      <div className="flex-1 flex justify-center items-center px-6 py-10 md:px-16">
        <div className="w-full max-w-md">
          <div className="bg-white p-8">
            <div className="text-center mb-8">
              <Image
                src="https://i.ibb.co/8jQ8GWq/logo.jpg"
                alt="Logo"
                width={150}
                height={50}
                className="mx-auto rounded-lg"
              />
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                Welcome Back!
              </h3>
              <p className="text-gray-600 text-sm">
                Manage your pet's care effortlessly.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
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
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-[#015c43] text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Sign In
              </button>
            </form>

            <div className="flex items-center justify-between mt-6">
              <Link
                href="/signup"
                className="text-blue-500 hover:underline text-sm"
              >
                Create account
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Full Page Image with Text */}
      <div
        className="flex-1 hidden md:flex justify-center items-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">
            Your Pet's Happiness, Our Priority
          </h2>
          <p className="text-lg max-w-md mx-auto">
            Join our community to keep your furry friends healthy, happy, and
            loved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
