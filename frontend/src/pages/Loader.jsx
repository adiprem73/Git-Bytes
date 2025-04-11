import React, { useState, useEffect } from 'react';
import LoaderNew from '../components/LoaderNew';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // ✅ Hook to navigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/Report"); // ✅ Redirect to /Report after loading
    }, 5000); // 5 seconds loader

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <LoaderNew />
    </div>
  );
};

export default Loader;
