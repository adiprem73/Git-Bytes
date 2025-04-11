import React from 'react';

const CTA = () => {
  return (
    <section className="container mx-auto px-6 py-16 mb-20">
      <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your website?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Start scanning now and get actionable security insights in minutes.
        </p>
        <button className="bg-[#00FF9C] text-[#121212] font-bold px-8 py-4 text-lg rounded-button hover:bg-opacity-90 transition-colors cursor-pointer whitespace-nowrap">
          Start Free Scan
        </button>
        <p className="mt-4 text-gray-400">
          No registration required for basic scans
        </p>
      </div>
    </section>
  );
};

export default CTA;