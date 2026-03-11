import React from "react";
import { useIsMobile } from "./useIsMobile"; 

import { ConstructionMonitoring as DesktopConstructionMonitoring } from "./DesktopConstructionMonitoring"; 
import { MobileConstructionMonitoring } from "./MobileConstructionMonitoring";   

const ConstructionMonitoring = () => {
  // 768px is the standard breakpoint for tablets and phones
  const isMobile = useIsMobile(768); 

  // If the user is on a phone/tablet, show the Mobile component
  if (isMobile) {
    return <MobileConstructionMonitoring />;
  }

  // Otherwise, show the full Desktop component
  return <DesktopConstructionMonitoring />;
};

// Add this line so App.tsx can import it properly!
export default ConstructionMonitoring;