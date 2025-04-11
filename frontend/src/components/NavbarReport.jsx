import React from 'react';

const NavbarReport = () => {
  return (
    <header className="bg-black bg-opacity-95 border-b border-gray-800 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-shield-alt text-[#00FF9D] text-2xl mr-2"></i>
          <span className="text-[#00FF9D] text-xl font-bold">WebSecScan</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">How It Works</a>
          <a href="#" className="text-gray-300 hover:text-white">About OWASP</a>
          <a href="#" className="text-gray-300 hover:text-white">Documentation</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white px-4 py-2 rounded-md">Log In</button>
          <button className="bg-[#00FF9D] text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default NavbarReport;