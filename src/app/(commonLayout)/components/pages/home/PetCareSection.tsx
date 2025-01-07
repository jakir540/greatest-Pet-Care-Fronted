"use client";
import Image from "next/image";
import React from "react";

const PetCareSection = () => {
  return (
    <div className="bg-green-100 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-blue-700">Great Pet Care</h1>
          <h2 className="text-2xl font-light mt-2">at your fingertips</h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <p>📄 Medical records</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <p>⏰ Medication reminders</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg w-52">
              <p>🔍 Personalized recommendations</p>
            </div>
          </div>
          <button className="bg-[#39835a] text-white font-semibold py-3 px-6 rounded-lg mt-6 hover:bg-green-700">
            Create My Account
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <div className="relative">
            {/* Next.js Image component */}
            <Image
              src="https://i.ibb.co/ZLCVM64/care-1.jpg"
              width={500}
              height={500}
              alt="Pet and owner"
              className="rounded-lg shadow-lg w-full"
            />

            <div className="absolute top-[-30px] right-4 bg-white shadow-md p-4 rounded-lg flex flex-col items-center">
              <p className="font-bold">New Comment</p>
              <p>Great care, friendly staff!</p>
              <p className="text-sm text-gray-500">User: Sarah L.</p>
              {/* Image for comment card */}
              <div className="mt-2 flex justify-center">
                <Image
                  src="https://i.ibb.co/5vps69Q/care2.jpg"
                  width={100}
                  height={100}
                  alt="User comment image"
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Floating card 3: Vet Information */}
            <div className="absolute bottom-4 left-4 bg-white shadow-md p-4 rounded-lg">
              <p className="font-bold">Dhaka khilkhet Bangladesh</p>
              <p>545 S Petmart, Aurora, Bangladesh</p>
              <p className="text-sm text-gray-500">Open: 8AM-6PM</p>
            </div>

            {/* Floating card 4: New Comment Card */}
            <div className="absolute bottom-[-20px] right-4 bg-white shadow-md p-4 rounded-lg flex flex-col items-center">
              <p className="font-bold">New Review</p>
              <p>My pet feels better already!</p>
              <p className="text-sm text-gray-500">User: John D.</p>
              {/* Image for review card */}
              <div className="mt-2">
                <Image
                  src="https://i.ibb.co.com/JyCCxX9/care-3.jpg"
                  width={100}
                  height={100}
                  alt="User review image"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareSection;

// https://i.ibb.co.com/ZLCVM64/care-1.jpg
// https://i.ibb.co.com/JyCCxX9/care-3.jpg
// https://i.ibb.co.com/5vps69Q/care2.jpg
// https://i.ibb.co.com/64mCBs3/care3.jpg
