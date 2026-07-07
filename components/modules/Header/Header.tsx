"use client"
import React, { useEffect, useState } from 'react';
import HeaderComponent from "@/components/modules/Header/HeaderComponent";

const Header = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <HeaderComponent isTopOfPage={isTopOfPage} />
  )
}

export default Header;