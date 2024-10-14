// AboutUs.tsx
import React from "react";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 md:px-20">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our mission, vision, and team.
        </p>
      </header>

      {/* Mission Statement */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg">
          We are dedicated to providing exceptional service and fostering
          innovation in our field. Our mission is to create value for our
          clients and make a positive impact in our community.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Card */}
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center text-gray-800">
                {member.name}
              </h3>
              <p className="text-center text-gray-600">{member.role}</p>
              <p className="text-gray-500 text-sm text-center mt-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Join Us on Our Journey
        </h2>
        <p className="text-gray-600 mb-4">
          Ready to take the next step? Connect with us today to learn more!
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

// Sample Team Members Data
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    bio: "John has over 10 years of experience in the industry and is passionate about leading our team to success.",
    image: "/images/john_doe.jpg", // Replace with your actual image path
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Jane is an expert in technology and innovation, ensuring we stay ahead of the curve.",
    image: "/images/jane_smith.jpg", // Replace with your actual image path
  },
  {
    name: "Emily Johnson",
    role: "CMO",
    bio: "Emily is dedicated to our marketing strategies and connecting with our customers.",
    image: "/images/emily_johnson.jpg", // Replace with your actual image path
  },
];

export default AboutUs;
