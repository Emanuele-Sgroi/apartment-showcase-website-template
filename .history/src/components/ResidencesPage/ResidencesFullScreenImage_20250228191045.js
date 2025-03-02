"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

const ResidencesFullScreenImage = ({ imageDesktop, imageMobile, alt }) => {
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

  // Compute the final image URL based on device size
  const imageSrc = isMobile
    ? getAssetUrl(imageMobile)
    : getAssetUrl(imageDesktop);

  // If the resulting imageSrc is an empty string or null, return nothing
  if (!imageSrc) {
    return null;
  }

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Image
        src={imageSrc}
        alt={alt || "Full screen image - Residences"}
        fill
        quality={100}
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
};

export default ResidencesFullScreenImage;
