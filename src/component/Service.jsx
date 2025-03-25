import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from "react-icons/fa";

function Service() {
  const services = [
    {
      id: 1,
      icon: <FaCode className="text-blue-500 text-5xl mb-4" />,
      title: "Web Development",
      description:
        "Crafting modern, high-performance websites with React, Next.js, and more.",
    },
    {
      id: 2,
      icon: <FaPaintBrush className="text-pink-500 text-5xl mb-4" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging designs to enhance user experience.",
    },
    {
      id: 3,
      icon: <FaMobileAlt className="text-green-500 text-5xl mb-4" />,
      title: "Mobile Development",
      description:
        "Building responsive and feature-rich mobile applications using React Native.",
    },
    {
      id: 4,
      icon: <FaCloud className="text-yellow-500 text-5xl mb-4" />,
      title: "Cloud Solutions",
      description:
        "Deploying scalable web apps on cloud platforms like AWS & Firebase.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-4xl font-bold text-blue-400 mb-10 text-center">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
