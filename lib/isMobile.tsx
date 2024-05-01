import { useState, useEffect } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Customize the breakpoint if needed
        const isMobileDevice = window.innerWidth <= 768; 
        setIsMobile(isMobileDevice);
      };
  
      handleResize(); // Check on initial load
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array: run the effect only once
  
    return isMobile;
  }


  function useIsTab() {
    const [isTab, setIsTab] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Customize the breakpoint if needed
        const isTabDevice = window.innerWidth <= 1024; 
        setIsTab(isTabDevice);
      };
  
      handleResize(); // Check on initial load
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array: run the effect only once
  
    return isTab;
  }
  
export { useIsMobile, useIsTab }