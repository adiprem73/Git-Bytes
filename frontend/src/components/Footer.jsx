import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-shield-alt text-[#00FF9C] text-2xl mr-3"></i>
              <h3 className="text-xl font-bold">WebSecScan</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced web security scanning based on OWASP standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Security Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 Git Bytes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;