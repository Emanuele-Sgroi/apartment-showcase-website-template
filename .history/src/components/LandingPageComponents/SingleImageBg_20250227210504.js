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

  // Just for debugging:
  useEffect(() => {
    console.log("desktopImages:", desktopImages);
    console.log("mobileImages:", mobileImages);
  }, [desktopImages, mobileImages]);

  // Helper to safely get the first image URL from an array
  const getFirstImageUrl = (images) => {
    if (!Array.isArray(images) || images.length === 0) {
      return "";
    }
    return getAssetUrl(images[0]);
  };

  const desktopImageUrl = getFirstImageUrl(desktopImages);
  const mobileImageUrl = getFirstImageUrl(mobileImages);

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

  // If both URLs are missing, show nothing or a fallback
  if (!desktopImageUrl && !mobileImageUrl) {
    return null;
  }

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <Image
        src={isMobile && mobileImageUrl ? mobileImageUrl : desktopImageUrl}
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
