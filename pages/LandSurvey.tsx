import React, { useState, useEffect } from 'react';

// Import both versions
import DesktopLandSurvey from './DesktopLandSurvey'; 
import { MobileLandSurvey } from './MobileLandSurvey'; 

const LandSurvey = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 1024px is the threshold. Below this = Mobile file. Above this = Desktop file.
      setIsMobile(window.innerWidth < 1024);
    };

    // Run immediately on load
    handleResize(); 
    
    // Listen for screen size changes
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // The Traffic Cop: Serves Mobile if screen is small, otherwise Desktop
  return isMobile ? <MobileLandSurvey /> : <DesktopLandSurvey />;
};

export default LandSurvey;