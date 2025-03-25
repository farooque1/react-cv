import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import FrontImage from "../assets/Photograph.jpeg"; // Front Image
import BackImage from "../assets/profiles.webp"; // Back Image

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[110vh] bg-black text-white px-2">
      <motion.div
        className="relative w-[150px] h-[150px] rounded-full shadow-lg border-4 border-gray-600 mb-4"
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Image */}
        <motion.img
          src={FrontImage}
          alt="Farooque Front"
          className="absolute w-full h-full object-cover rounded-full"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Back Image */}
        <motion.img
          src={BackImage}
          alt="Farooque Back"
          className="absolute w-full h-full object-cover rounded-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Hero Text */}
      <p className="text-white text-2xl font-extrabold tracking-wide">
        Hello, I&apos;m
      </p>
      <h1 className="text-white text-5xl font-extrabold tracking-wide mt-2">
        <span className="text-blue-400">Farooque Shaikh</span>
      </h1>

      {/* Animated Role Text */}
      <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-300 mt-2">
        <TypeAnimation
          sequence={[
            "ReactJs Developer",
            1000,
            "Web Developer",
            1000,
            "FrontEnd Developer",
            1000,
            "NextJs Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mt-4 leading-relaxed">
        I am a Frontend Developer at{" "}
        <span className="text-blue-400 font-semibold">Peri Scope-Tech.</span>I
        spend my day working on web apps with **JavaScript, React.js, Redux,
        Redux-Thunk, and Next.js**.
      </p>
      <div className="flex gap-8 mt-6">
        <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md hover:scale-105 transition-transform">
          Download CV
        </button>
        <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-md hover:scale-105 transition-transform">
          Contact Me
        </button>
      </div>
    </div>
  );
}
