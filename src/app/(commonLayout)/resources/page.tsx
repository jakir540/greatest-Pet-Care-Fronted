/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Importing framer-motion

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-6 md:px-24">
      {/* Header Section */}
      <header className="text-center mb-16">
        <motion.h1
          className="text-5xl font-extrabold text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Learn more about our mission, vision, values, and the passionate
          people behind the platform.
        </motion.p>
      </header>

      {/* Company Overview */}
      <section className="mb-16 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Company Overview
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Pet Care Tips & Stories is more than just a website – it’s a community
          of passionate pet lovers coming together to share experiences, provide
          expert tips, and support each other. From pet nutrition to
          heartwarming rescue stories, we create a space where pet owners can
          learn, grow, and connect with others who share the same love for their
          pets.
        </motion.p>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our mission is to empower pet owners with the knowledge and resources
          they need to ensure their pets live happy, healthy lives. We’re
          committed to providing actionable advice on everything from nutrition
          to grooming, while also sharing the inspiring stories of love and
          loyalty that make the bond between pets and owners so special.
        </motion.p>
      </section>

      {/* Our Values */}
      <section className="bg-white p-10 rounded-xl shadow-lg mb-16">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-800">Compassion</h3>
            <p className="text-gray-600">
              We deeply care about the well-being of animals, offering advice
              and stories that inspire kindness and empathy.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-800">Community</h3>
            <p className="text-gray-600">
              We believe in the power of community and the value of learning
              from one another’s experiences.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
            <p className="text-gray-600">
              We continuously innovate to improve our platform and offer fresh
              insights into the pet care world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline of Growth */}
      <section className="mb-16 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Growth
        </motion.h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-gray-800 font-semibold text-lg">2020</div>
            <div className="bg-blue-500 w-16 h-1"></div>
            <div className="text-gray-600">Launched the platform</div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="text-gray-800 font-semibold text-lg">2021</div>
            <div className="bg-blue-500 w-16 h-1"></div>
            <div className="text-gray-600">
              Introduced user-generated pet stories
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-gray-800 font-semibold text-lg">2022</div>
            <div className="bg-blue-500 w-16 h-1"></div>
            <div className="text-gray-600">
              Expanded to include expert tips from veterinarians
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="text-gray-800 font-semibold text-lg">2023</div>
            <div className="bg-blue-500 w-16 h-1"></div>
            <div className="text-gray-600">Reached 1 million active users</div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-center text-gray-800">
                {member.name}
              </h3>
              <p className="text-center text-gray-600">{member.role}</p>
              <p className="text-gray-500 text-sm text-center mt-2">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Join Us on Our Journey
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Ready to take the next step? Connect with us to learn more about our
          mission, collaborate, or simply share your story. Let's make a
          difference together!
        </motion.p>
        <motion.button
          className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

// Sample Team Members Data
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "John has over 10 years of experience in the industry and is passionate about leading our team to success.",
    image: "https://i.ibb.co/dJRW5KS/member-1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    bio: "Jane is an expert in technology and innovation, ensuring we stay ahead of the curve in the pet care industry.",
    image: "https://i.ibb.co/Gk2Hxcx/member-2.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Community Manager",
    bio: "Emily is responsible for building and nurturing a strong community of pet lovers and pet owners.",
    image: "https://i.ibb.co/Gk2Hxcx/member-2.jpg",
  },
];

export default AboutUs;
