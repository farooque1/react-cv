import React from "react";
import BackImage from "../assets/profiles.webp";

function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white p-10 md:p-20">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative">
          <img
            src={BackImage}
            alt="About Me"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full shadow-2xl object-cover transition-transform transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-400 opacity-20 rounded-full hover:opacity-10 transition-opacity"></div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-2/3 text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          👋 Greetings! I am a passionate <span className="text-blue-300 font-semibold">Frontend Web Developer</span> dedicated to creating captivating and responsive web applications.  
          <br /><br />
          🚀 I bring hands-on experience in crafting dynamic interfaces and seamless user experiences.  
          <br /><br />
          💡 My proficiency in <span className="text-green-400 font-semibold">JavaScript, ReactJS, NextJS,and Redux</span> allows me to build engaging front-end solutions that bring ideas to life.
        </p>
      </div>
    </div>
  );
}

export default About;
