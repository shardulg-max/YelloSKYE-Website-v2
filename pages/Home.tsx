import React from "react";
import { useIsMobile } from "./useIsMobile"; 
import { Home as DesktopHome } from "./DesktopHome"; 
import { MobileHome } from "./MobileHome";   

export const Home = () => {
  // 768px is the standard breakpoint for tablets and phones
  const isMobile = useIsMobile(768); 

  if (isMobile) {
    return <MobileHome />;
  }

  return <DesktopHome />;
};