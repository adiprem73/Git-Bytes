import React from 'react';

const Navbar = () => {
  return (
    <header className="container mx-auto px-6 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-shield-alt text-[#00FF9C] text-2xl mr-3"></i>
          <h1 className="text-xl font-bold tracking-wider">WebSecScan</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">How It Works</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About OWASP</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Documentation</a>
        </div>
        <div>
          <button className="bg-[#1E1E1E] text-gray-300 px-4 py-2 rounded-button hover:bg-[#2A2A2A] transition-colors cursor-pointer whitespace-nowrap">
            Log In
          </button>
          <button className="ml-3 bg-[#00FF9C] text-[#121212] font-medium px-4 py-2 rounded-button hover:bg-opacity-90 transition-colors cursor-pointer whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;