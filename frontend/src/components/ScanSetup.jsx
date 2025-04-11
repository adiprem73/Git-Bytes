import React, { useState } from 'react';

const ScanSetup = () => {
  const [url, setUrl] = useState('');
  const [vulnerabilityTypes, setVulnerabilityTypes] = useState({
    xss: true,
    sqlInjection: true,
    csrf: true,
    sslMisconfigurations: true
  });
  const [mode, setMode] = useState('beginner');
  const [advancedSettings, setAdvancedSettings] = useState({
    requestDelay: 200,
    customHeaders: ''
  });
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const handleVulnerabilityToggle = (type) => {
    setVulnerabilityTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAdvancedSettingsChange = (setting, value) => {
    setAdvancedSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <section className="container mx-auto px-6 py-16 bg-[#1E1E1E] rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-center">Set Up Your Security Scan</h2>

      {/* URL Input */}
      <div className="mb-8">
        <label htmlFor="url" className="block text-gray-300 mb-2">Enter your site URL</label>
        <div className="relative">
          <i className="fas fa-globe absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#00FF9C] transition-colors"
          />
        </div>
      </div>

      {/* Vulnerability Types */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Vulnerability Types to Scan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries({
            xss: 'XSS (Cross-Site Scripting)',
            sqlInjection: 'SQL Injection',
            csrf: 'CSRF (Cross-Site Request Forgery)',
            sslMisconfigurations: 'SSL Misconfigurations'
          }).map(([key, label]) => (
            <div key={key} className="flex items-center bg-[#2A2A2A] p-4 rounded-lg">
              <button
                onClick={() => handleVulnerabilityToggle(key)}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
                  vulnerabilityTypes[key] ? 'bg-[#00FF9C]' : 'bg-[#404040]'
                } cursor-pointer`}
              >
                <span
                  className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                    vulnerabilityTypes[key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="ml-3 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mode Selector */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Scan Mode</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => setMode('beginner')}
            className={`px-6 py-3 rounded-button transition-colors ${
              mode === 'beginner' ? 'bg-[#2A2A2A] text-white' : 'bg-[#1E1E1E] text-gray-400'
            } cursor-pointer whitespace-nowrap`}
          >
            <i className="fas fa-user-shield mr-2"></i>
            Beginner
          </button>
          <button
            onClick={() => setMode('advanced')}
            className={`px-6 py-3 rounded-button transition-colors ${
              mode === 'advanced' ? 'bg-[#2A2A2A] text-white' : 'bg-[#1E1E1E] text-gray-400'
            } cursor-pointer whitespace-nowrap`}
          >
            <i className="fas fa-user-ninja mr-2"></i>
            Advanced
          </button>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium">Advanced Settings</h3>
          <button
            onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
            className="text-[#00FF9C] hover:text-opacity-80 transition-colors cursor-pointer"
          >
            {showAdvancedSettings ? 'Hide' : 'Show'} Advanced Settings
            <i className={`fas fa-chevron-${showAdvancedSettings ? 'up' : 'down'} ml-2`}></i>
          </button>
        </div>

        {showAdvancedSettings && (
          <div className="mt-4 p-6 bg-[#0A0A0A] rounded-lg">
            <div className="mb-4">
              <label htmlFor="requestDelay" className="block text-gray-300 mb-2">
                Request Delay (ms)
              </label>
              <input
                type="range"
                id="requestDelay"
                min="0"
                max="1000"
                step="50"
                value={advancedSettings.requestDelay}
                onChange={(e) =>
                  handleAdvancedSettingsChange('requestDelay', parseInt(e.target.value))
                }
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>0ms</span>
                <span>{advancedSettings.requestDelay}ms</span>
                <span>1000ms</span>
              </div>
            </div>

            <div>
              <label htmlFor="customHeaders" className="block text-gray-300 mb-2">
                Custom Headers (JSON format)
              </label>
              <textarea
                id="customHeaders"
                value={advancedSettings.customHeaders}
                onChange={(e) => handleAdvancedSettingsChange('customHeaders', e.target.value)}
                placeholder='{"Authorization": "Bearer token", "Custom-Header": "Value"}'
                className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#00FF9C] transition-colors font-mono text-sm h-24"
              ></textarea>
            </div>
          </div>
        )}
      </div>

      {/* Run Scan Button */}
      <div className="text-center">
        <button className="bg-[#00FF9C] text-[#121212] font-bold px-8 py-4 text-lg rounded-button hover:bg-opacity-90 transition-colors cursor-pointer whitespace-nowrap">
          <i className="fas fa-bolt mr-2"></i>
          Run Security Scan
        </button>
        <p className="mt-4 text-gray-400 text-sm">
          Estimated scan time: 45-60 seconds
        </p>
      </div>
    </section>
  );
};

export default ScanSetup;
