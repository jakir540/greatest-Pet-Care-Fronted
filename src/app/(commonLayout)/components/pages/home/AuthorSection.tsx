"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const authors = [
  {
    name: "Dr. Jane Smith",
    image: "https://i.ibb.co/JyCCxX9/care-3.jpg", // Replace with actual image URL
    bio: "Dr. Smith specializes in pet nutrition and wellness.",
  },
  {
    name: "Dr. John Doe",
    image: "https://i.ibb.co/5vps69Q/care2.jpg", // Replace with actual image URL
    bio: "Dr. Doe has over 10 years of experience in veterinary surgery.",
  },
  {
    name: "Dr. Emily Johnson",
    image: "https://i.ibb.co/64mCBs3/care3.jpg", // Replace with actual image URL
    bio: "Dr. Johnson is passionate about animal behavior and training.",
  },
  // Add more authors as needed
];

const AuthorSection = () => {
  return (
    <div className="bg-green-50 py-12">
      {/* Centering Container */}
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-700">
          Meet Our Veterinary Authors
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Veterinarians are at the core of Great Pet Care. These caring
          professionals write articles, review content for medical accuracy, and
          provide trusted information and insight. Meet some of our pet health
          partners.
        </p>

        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1} // Can increase for multiple authors per view
          centeredSlides={true} // Centers the slides
          className="mySwiper"
        >
          {authors.map((author, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="w-60 h-60 flex flex-col items-center bg-white rounded-full shadow-lg overflow-hidden mb-4">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={240}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-700">
                {author.name}
              </h3>
              <p className="text-gray-500 mt-2 max-w-md">{author.bio}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AuthorSection;
