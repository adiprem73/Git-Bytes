// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App = () =>{
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full bg-[#0A0A0F] flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #1A1A20 1px, transparent 1px), linear-gradient(to bottom, #1A1A20 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#00FF8A] opacity-10"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 20}s linear infinite`
            }}
          ></div>
        ))}
      </div>

      {/* Login card */}
      <div className="w-full max-w-[420px] bg-[#151518] bg-opacity-90 backdrop-blur-md rounded-[20px] p-10 z-10 shadow-lg relative mx-4 animate-fadeIn">
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-[20px] shadow-[0_0_15px_rgba(0,255,138,0.3)] animate-pulse"></div>
        
        {/* Logo and header */}
        <div className="text-center mb-8">
          <h1 className="text-[#00FF8A] text-3xl font-bold font-mono mb-2">WebSecScan</h1>
          <p className="text-gray-400 font-mono text-sm">Advanced Security Platform</p>
          <div className="h-px bg-gradient-to-r from-transparent via-[#00FF8A] to-transparent opacity-30 my-4"></div>
        </div>

        <h2 className="text-white text-xl font-bold font-mono mb-6">Login</h2>
        
        {/* Login form */}
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-300 font-mono text-sm">Email</label>
            <div className="relative">
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1A1A1F] border border-[#2A2A30] focus:border-[#00FF8A] text-white font-mono rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-[#00FF8A] transition-all duration-300 text-sm"
                placeholder="your@email.com"
              />
              <i className="fas fa-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-300 font-mono text-sm">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1A1A1F] border border-[#2A2A30] focus:border-[#00FF8A] text-white font-mono rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-[#00FF8A] transition-all duration-300 text-sm"
                placeholder="••••••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#00FF8A] transition-colors duration-300 cursor-pointer"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
          </div>
          
          <div className="text-right">
            <a href="#" className="text-[#00FF8A] text-xs hover:underline font-mono transition-all duration-300 cursor-pointer">Forgot Password?</a>
          </div>
          
          <button 
            type="submit" 
            className="!rounded-button whitespace-nowrap w-full bg-[#00FF8A] text-[#0A0A0F] font-bold py-3 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 font-mono cursor-pointer"
          >
            Log In
          </button>
        </form>
        
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>
        
        <div className="text-center font-mono text-sm">
          <span className="text-gray-400">Don't have an account?</span>{' '}
          <a href="#" className="text-[#00FF8A] hover:underline cursor-pointer transition-all duration-300">Sign Up</a>
        </div>
        
        {/* Security badges */}
        <div className="flex justify-center mt-6 space-x-4">
          <div className="text-gray-600 text-xs flex items-center">
            <i className="fas fa-shield-alt mr-1"></i> 
            <span>Secure</span>
          </div>
          <div className="text-gray-600 text-xs flex items-center">
            <i className="fas fa-lock mr-1"></i> 
            <span>Encrypted</span>
          </div>
          <div className="text-gray-600 text-xs flex items-center">
            <i className="fas fa-fingerprint mr-1"></i> 
            <span>Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// Add keyframe animation for floating particles
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    10% { opacity: 0.1; }
    90% { opacity: 0.1; }
    100% { transform: translateY(-1000px) translateX(100px); opacity: 0; }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-pulse {
    animation: pulse 3s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }
`;
document.head.appendChild(style);

