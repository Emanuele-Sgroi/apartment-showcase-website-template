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

  // Convert the arrays of assets to URLs using getAssetUrl
  const images = isMobile
    ? mobileImages.map((asset) => getAssetUrl(asset))
    : desktopImages.map((asset) => getAssetUrl(asset));

  // If both URLs are missing, show nothing or a fallback
  if (images) {
    return null;
  }

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <Image
        src={images}
        alt={`${heroTitle || ""} Background Image`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw" // recommended for fill images
      />
    </div>
  );
};

export default SingleImageBg;
