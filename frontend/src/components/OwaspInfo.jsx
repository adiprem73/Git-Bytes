import React from 'react';

const OwaspInfo = () => {
  return (
    <section className="container mx-auto px-6 py-16 bg-[#1E1E1E] rounded-lg">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl font-bold mb-6">About OWASP</h2>
          <p className="text-gray-300 mb-4">
            The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software.
          </p>
          <p className="text-gray-300 mb-6">
            Our scanner is built on OWASP Top 10 principles, the standard awareness document for developers and web application security.
          </p>
          <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="text-[#00FF9C] hover:underline cursor-pointer">
            Learn more about OWASP <i className="fas fa-external-link-alt ml-1"></i>
          </a>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#0A0A0A] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">OWASP Top 10 Vulnerabilities</h3>
            <ul className="space-y-3">
              {[
                'Broken Access Control',
                'Cryptographic Failures',
                'Injection',
                'Insecure Design',
                'Security Misconfiguration'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-[#00FF9C] mt-1 mr-3"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#00FF9C] mr-2"></div>
                <span className="text-sm text-gray-400">Our scanner checks for these and many more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwaspInfo;