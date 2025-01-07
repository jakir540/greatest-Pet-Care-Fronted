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
  const loginImage = "https://i.ibb.co.com/cyP349C/login-Image.jpg";

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
      // Make the login request to the backend API
      const response = await axios.post(
        "https://greatest-pet-care-backend.vercel.app/api/user/login",
        {
          email,
          password,
        }
      );

      // Log the entire response object to see its structure
      console.log("Full response from API:", response.data.data.remainingData);
      const token = response.data.data.token;
      const role = response.data.data.remainingData.role;

      // Log to see what values are being extracted
      console.log("Received token:", token); // Should log token value if correct
      console.log("User role:", role); // Should log role value if correct

      if (token && role) {
        // Save the token in local storage for authentication
        localStorage.setItem("authToken", token);
        console.log("Token successfully stored in localStorage:", token);

        // Redirect or handle navigation based on user role
        if (role === "admin") {
          window.location.href = "/admin"; // Redirect to admin dashboard
        } else if (role === "user") {
          window.location.href = "/"; // Redirect to user homepage
        } else {
          console.error("Unknown user role:", role);
          throw new Error("Invalid user role");
        }
      } else {
        throw new Error("Missing token or role in the response");
      }
    } catch (error: any) {
      // Log the error and show an error message in the UI
      const errorMessage = error.response?.data?.message || "Login failed";
      setError(errorMessage); // Display error message in the form
      console.error("Error during login:", errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6">
      <div className="flex flex-col md:flex-row max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Side: Login Form */}
        <div className="flex-1">
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center space-y-6 text-center">
              {/* Logo Section */}
              <div className="mb-6">
                <Image
                  src="https://i.ibb.co.com/8jQ8GWq/logo.jpg"
                  alt="Logo"
                  width={150}
                  height={50}
                />
              </div>

              {/* Login Form */}
              <h3 className="text-2xl font-semibold mb-6">
                Access your account
              </h3>

              {/* Input Fields */}
              <form className="w-full" onSubmit={handleLogin}>
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Bind email state
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Bind password state
                      required
                    />
                  </div>
                </div>
                {/* Show error message if exists */}
                {error && <h3 className="text-red-500 text-sm">{error}</h3>}

                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign in
                </button>
              </form>

              <p className="text-gray-500 mt-4">OR</p>

              {/* Apple Button */}
              <button className="w-full mt-2 border-2 border-gray-900 text-gray-900 font-bold py-2 rounded hover:bg-gray-200">
                Continue with Apple
              </button>

              <div className="flex justify-between w-full mt-4">
                <Link href="/signup">
                  <button className="bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
                    Create account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block flex-1">
          <Image
            src={loginImage}
            alt="Manage your pet's care"
            layout="responsive"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
