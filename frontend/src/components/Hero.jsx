import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const words = ['security flaws', 'vulnerabilities', 'risks', 'bugs'];
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetweenWords = 1000;
  const pauseAfterDelete = 500;

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenWords);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, pauseAfterDelete);
    } else {
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(updatedText);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono leading-tight">
          Scan your website for common{' '}
          <span className="text-[#33FFB2]">
            {displayText}
            <span className={blink ? 'opacity-100' : 'opacity-0'}>|</span>
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get a detailed report in seconds. Identify vulnerabilities before hackers do.
        </p>

        {/* Glowing button with smooth border animation */}
        <button className="relative group text-[#121212] font-bold px-8 py-4 text-lg rounded-button bg-[#33FFB2] overflow-hidden transition-all duration-300 ease-out shadow-md">
          <span className="relative z-10">Start Scan</span>
          {/* Border sweep */}
          <span className="absolute inset-0 border-2 border-transparent rounded-button group-hover:border-[#00FF9C] transition-all duration-500 ease-in-out animate-glow"></span>
          {/* Glowing border effect */}
          <span className="absolute inset-0 rounded-button pointer-events-none group-hover:shadow-[0_0_15px_3px_#00FF9C] transition-shadow duration-500 ease-in-out"></span>
        </button>

        <div className="mt-8 flex items-center text-gray-400">
          <i className="fas fa-lock mr-2"></i>
          <span>Secure, private, and no installation required</span>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 z-0">
        <div className="relative">
          <img 
            src="./main_page.jpg" 
            alt="Security scan dashboard" 
            className="rounded-lg shadow-2xl object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#00FF9C] mr-2"></div>
              <span className="text-sm font-mono">Real-time protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
