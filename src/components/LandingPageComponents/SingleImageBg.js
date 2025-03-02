"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetUrl } from "@/utils/imageUtils";

const SingleImageBg = ({
  desktopImages = [],
  mobileImages = [],
  heroTitle,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Extract the first image from each array and convert to URL
  const desktopImageUrl = desktopImages[0] ? getAssetUrl(desktopImages[0]) : "";
  const mobileImageUrl = mobileImages[0] ? getAssetUrl(mobileImages[0]) : "";

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

  // If no images, return null.
  if (!desktopImageUrl && !mobileImageUrl) {
    return null;
  }

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <Image
        src={isMobile ? mobileImageUrl : desktopImageUrl}
        alt={`${heroTitle} Background Image`}
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
};

export default SingleImageBg;
