// src/component/Header.js
import { useContext } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaServicestack,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext"; // Corrected casing

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("theme",theme)
  return (
    <header className="p-2 fixed bg-gray-800 text-white shadow-md w-full z-10">
      <div className="container mx-auto flex items-center justify-between md:justify-center">
        <div className="text-lg font-bold md:px-3 px-5 md:text-left text-center w-full md:w-auto">
          <span className="md:hidden">FAROOQUE SHAIKH</span>
          <span className="hidden md:block">FAROOQUE</span>
        </div>

        <div className="hidden md:flex justify-center w-full">
          <nav className="bg-black text-white flex p-2 rounded-full shadow-lg md:w-auto">
            {[
              { href: "#home", icon: <FaHome size={18} />, label: "Home" },
              { href: "#about", icon: <FaUser />, label: "About" },
              { href: "#skills", icon: <FaTools />, label: "Skills" },
              { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
              { href: "#services", icon: <FaServicestack />, label: "Services" },
              { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative group flex items-center justify-center w-12 h-10 mx-2 rounded-full hover:bg-blue-400 transition"
              >
                {item.icon}
                <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <button
          onClick={toggleTheme}
          className="p-3 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center w-10 h-10 md:mx-3 md:relative"
        >
          {theme === "light" ? <FaMoon size={15} /> : <FaSun size={15} />}
        </button>
      </div>

      <nav className="bg-gray-700 text-white flex p-2 rounded-full shadow-lg md:hidden fixed bottom-12 left-1/2 transform -translate-x-1/2 w-[90%]">
        {[
          { href: "#home", icon: <FaHome size={18} />, label: "Home" },
          { href: "#about", icon: <FaUser />, label: "About" },
          { href: "#skills", icon: <FaTools />, label: "Skills" },
          { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
          { href: "#services", icon: <FaServicestack />, label: "Services" },
          { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative group flex items-center justify-center w-12 h-10 mx-2 rounded-full hover:bg-gray-800 transition"
          >
            {item.icon}
            <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}