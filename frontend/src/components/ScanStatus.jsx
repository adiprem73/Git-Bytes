import React from 'react';

const ScanStatus = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <div className="bg-[#00FF9D] bg-opacity-20 p-2 rounded-full mr-3">
          <i className="fas fa-check text-[#00FF9D]"></i>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Scan Completed Successfully</h2>
          <p className="text-gray-400 text-sm">
            Scanned Site: <span className="font-mono">https://example.com</span>
          </p>
          <p className="text-gray-400 text-sm">
            Date of Scan: <span>April 11, 2025</span>
          </p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
          <i className="fas fa-download mr-2"></i>
          Download Full Report
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
          <i className="fas fa-search mr-2"></i>
          Scan Another Site
        </button>
      </div>
    </div>
  );
};

export default ScanStatus;