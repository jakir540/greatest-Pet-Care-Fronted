/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Register = () => {
  const registerImage = "https://i.ibb.co.com/cyP349C/login-Image.jpg";
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

      console.log("response is: ", response);

      if (response.status === 200) {
        setSuccessMessage("User registered successfully");
        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login page
        }, 2000);
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Something went wrong";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6">
      <div className="flex flex-col md:flex-row max-w-6xl w-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Side: Registration Form */}
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

              {/* Registration Form */}
              <h3 className="text-2xl font-semibold mb-6">
                Create your account
              </h3>

              {/* Input Fields */}
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)} // Bind name state
                      required
                    />
                  </div>
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
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} // Bind phone state
                      required
                    />
                  </div>
                </div>

                {/* Error and Success Messages */}
                {errorMessage && (
                  <h3 className="text-red-500 text-sm">{errorMessage}</h3>
                )}
                {successMessage && (
                  <h3 className="text-green-500 text-sm">{successMessage}</h3>
                )}

                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </form>

              <p className="text-gray-500 mt-4">OR</p>

              {/* Apple Button */}
              <button className="w-full mt-2 border-2 border-gray-900 text-gray-900 font-bold py-2 rounded hover:bg-gray-200">
                Continue with Apple
              </button>

              <div className="flex justify-between w-full mt-4">
                <button
                  onClick={() => (window.location.href = "/login")}
                  className="bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded"
                >
                  Login here
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block flex-1">
          <Image
            src={registerImage}
            alt="Sign up to explore new experiences"
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

export default Register;
