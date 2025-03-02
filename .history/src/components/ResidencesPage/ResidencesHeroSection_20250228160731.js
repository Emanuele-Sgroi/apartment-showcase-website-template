"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { getAssetUrl } from "@/utils/imageUtils";

const ResidencesHeroSection = ({ residencesContent }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Extract the image from CMS
  const desktopImageUrl = residencesContent?.heroImage
    ? getAssetUrl(residencesContent.heroImage)
    : "";
  const mobileImageUrl = residencesContent?.heroImageMobile
    ? getAssetUrl(residencesContent.heroImageMobile)
    : "";

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

  residencesContent?.heroImage;

  return (
    <section className="w-full h-screen">
      {/* Overlay div */}
      <div className="__app_overlay_div"></div>
      <div className="relative w-full h-full overflow-hidden z-[-1]">
        <Image
          src={isMobile ? mobileImageUrl : desktopImageUrl}
          alt={residencesContent?.heroImageAlt || "Residences Page"}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default ResidencesHeroSection;
