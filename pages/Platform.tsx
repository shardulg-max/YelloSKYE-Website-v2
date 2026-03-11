import React, { useState, useEffect } from 'react';
import DesktopPlatform from './DesktopPlatform'; // Make sure this matches your file name
import MobilePlatform from './MobilePlatform';   // Make sure this matches your file name

export const Platform = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to evaluate screen width
    const handleResize = () => {
      // 1024px matches Tailwind's 'lg' breakpoint. 
      // Anything smaller than an iPad Pro will get the mobile-optimized view.
      setIsMobile(window.innerWidth < 1024);
    };

    // Run once on initial load
    handleResize();

    // Listen for window resizing
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Conditionally render the correct component
  return isMobile ? <MobilePlatform /> : <DesktopPlatform />;
};

export default Platform;