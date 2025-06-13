import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'; // 👈 Import typewriter
import LetterGlitch from './LetterGlitch';
// import '../Loader.css';

const scanMessages = [
  'SCANNING FOR SQL INJECTION',
  'SCANNING FOR XSS',
  'SCANNING FOR CSR FORGERY',
  'SCANNING FOR MISCONFIGURATIONS',
];

const subSteps = [ // 👈 Cool typewriter steps
  'Initializing AI vulnerability models...',
  'Tokenizing target source code...',
  'Scanning for SQL injection payloads...',
  'Running XSS detection heuristics...',
  'Simulating CSRF token validation...',
  'Parsing SSL certificate chain...',
  'Finalizing threat report...',
];

const LoaderNew = () => {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHidden(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % scanMessages.length);
        setHidden(false);
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        <div className="loader-text">
          <div className={`loader-text-1 fade-text ${hidden ? 'hidden' : ''}`}>
            {scanMessages[index]}
          </div>

          {/* ✨ Typewriter Effect */}
          <div className="loader-text-2">
            <Typewriter
              words={subSteps}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={45}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </div>
        </div>
      </div>
      <div className="fade-overlay"></div>
    </div>
  );
};

export default LoaderNew;
