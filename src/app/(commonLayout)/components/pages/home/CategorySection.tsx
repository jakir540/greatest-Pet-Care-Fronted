"use client";

import Image from "next/image";
import React, { useState } from "react";

const petCareTips = [
  {
    title: "Grooming Tips for Pets",
    imgSrc: "https://i.ibb.co/FBPLK1b/pet4.jpg",
  },
  {
    title: "Healthy Pet Diet",
    imgSrc: "https://i.ibb.co/GPgmptV/pet5.jpg",
  },
  {
    title: "Exercise and Play",
    imgSrc: "https://i.ibb.co/JKB190S/pet6.jpg",
  },
  {
    title: "Vet Checkups",
    imgSrc: "https://i.ibb.co/XtTxgqP/pet7.jpg",
  },
  {
    title: "Comfortable Pet Space",
    imgSrc: "https://i.ibb.co/p2tzb0D/pet8.jpg",
  },
];

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % petCareTips.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? petCareTips.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Pet Care & Tips</h2>

      <div className="relative overflow-hidden">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {petCareTips.map((tip, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center"
            >
              <div className="flex flex-col items-center">
                <div className="p-4">
                  <Image
                    width={350}
                    height={450}
                    src={tip.imgSrc}
                    alt={tip.title}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-center">
                    {tip.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      {/* Dots for Carousel */}
      <div className="flex justify-center mt-4">
        {petCareTips.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-2 cursor-pointer ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
