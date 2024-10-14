"use client";
import Image from "next/image";
import trusPhoto from "../../../../../assets/trusPhoto2.jpg";
import { useState } from "react";

const TrustSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Function to toggle accordion
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#39835a]">
      <section className="p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between w-11/12 lg:w-4/5 max-w-screen-xl gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-6xl font-bold text-center lg:text-left text-white mb-10 leading-[80px]">
            Pet Content You Can Trust
          </h1>

          {/* Accordion Items */}
          <div className="space-y-4">
            {/* Accordion 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full flex justify-between items-center py-4 px-5 bg-white hover:bg-gray-100 transition-all duration-300 text-xl font-semibold text-green-700 focus:outline-none"
              >
                Health Articles Accuracy
                <span
                  className={`transform transition-transform duration-300 ${
                    openAccordion === 1 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  &#9660;
                </span>
              </button>
              {openAccordion === 1 && (
                <div className="px-5 py-4 bg-gray-50 text-gray-700 text-lg">
                  All health articles are written by or reviewed by
                  veterinarians to ensure medical accuracy. We are committed to
                  reviewing pet health content annually.
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full flex justify-between items-center py-4 px-5 bg-white hover:bg-gray-100 transition-all duration-300 text-xl font-semibold text-green-700 focus:outline-none"
              >
                Expert Behavior Advice
                <span
                  className={`transform transition-transform duration-300 ${
                    openAccordion === 2 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  &#9660;
                </span>
              </button>
              {openAccordion === 2 && (
                <div className="px-5 py-4 bg-gray-50 text-gray-700 text-lg">
                  We work with and source information from dog trainers and
                  animal behaviorists for behavior-related and training content.
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full flex justify-between items-center py-4 px-5 bg-white hover:bg-gray-100 transition-all duration-300 text-xl font-semibold text-green-700 focus:outline-none"
              >
                Professional Contributors
                <span
                  className={`transform transition-transform duration-300 ${
                    openAccordion === 3 ? "rotate-180" : "rotate-0"
                  }`}
                >
                  &#9660;
                </span>
              </button>
              {openAccordion === 3 && (
                <div className="px-5 py-4 bg-gray-50 text-gray-700 text-lg">
                  Our non-veterinary contributors are professional journalists
                  with decades of experience in the pet industry. They are
                  top-notch researchers, expert interviewers, and diehard animal
                  lovers.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src={trusPhoto}
            alt="Trustworthy pet content"
            width={800}
            height={600}
            className="rounded-lg shadow-xl object-cover transition-transform transform hover:scale-105 duration-500"
          />
        </div>
      </section>
    </div>
  );
};

export default TrustSection;
