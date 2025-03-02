"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const desktopImage = "/images/slider1.jpg";
const mobileImage = "/images/slider2.jpg";

const SingleImageBg = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for image switching
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <Image
        src={isMobile ? mobileImage : desktopImage}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
};

export default SingleImageBg;
