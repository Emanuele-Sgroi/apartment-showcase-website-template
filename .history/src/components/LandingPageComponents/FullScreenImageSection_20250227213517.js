"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

const FullScreenImageSection = ({ imageDesktop, imageMobile, alt }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Image
        src={isMobile ? getAssetUrl(imageMobile) : getAssetUrl(imageDesktop)}
        alt={alt}
        fill
        quality={100}
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
};

export default FullScreenImageSection;
