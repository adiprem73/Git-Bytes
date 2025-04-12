import React from 'react';

const SecurityScore = ({score}) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-6 mb-8 border border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">Final Security Score</h3>
          <div className="flex items-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">{score ?? 7.5}</span>
              </div>
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#444"
                  strokeWidth="2"
                  strokeDasharray="100, 100"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#00FF9D"
                  strokeWidth="2"
                  strokeDasharray="75, 100"
                  className="animate-pulse"
                />
              </svg>
            </div>
            <div className="ml-4">
              <span className="text-2xl font-bold">/10</span>
              <p className="text-gray-400 text-sm mt-1">Based on combined scores from all tested vulnerabilities</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-300">Safe / No issues</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm text-gray-300">Medium Risk</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm text-gray-300">High Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityScore;