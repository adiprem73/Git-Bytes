import React from 'react';

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1E1E1E] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-search text-[#00FF9C] text-xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">1. Enter Your URL</h3>
          <p className="text-gray-300">
            Provide your website address and select which vulnerabilities you want to scan for.
          </p>
        </div>
        
        <div className="bg-[#1E1E1E] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-check text-[#00FF9D] "></i>
          </div>
          <h3 className="text-xl font-bold mb-3">2. Automated Scanning</h3>
           
          <p className="text-gray-300">
            Our system performs non-invasive tests to identify security issues based on OWASP guidelines.
          </p>
        </div>
        
        <div className="bg-[#1E1E1E] p-6 rounded-lg">
          <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-file-alt text-[#00FF9C] text-xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-3">3. Get Detailed Report</h3>
          <p className="text-gray-300">
            Receive a comprehensive security report with actionable recommendations to fix vulnerabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;