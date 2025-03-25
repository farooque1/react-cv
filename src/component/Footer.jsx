import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Brand & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
        </div>

        {/* Right Side - Social Media Links */}
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-md hover:text-white transition">
            🔗 GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-md hover:text-white transition">
            🔗 LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-md hover:text-white transition">
            🔗 Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
