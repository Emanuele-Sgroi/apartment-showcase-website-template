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
    <section className="relative w-full h-screen">
      {/* Overlay div */}
      <div className="__app_overlay_div_half_transparent"></div>
      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
        className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer !z-20 transition-all duration-300 hover:opacity-80"
      >
        <ScrollLink to="residences-second-section" smooth={true} duration={800}>
          <ChevronDown className="w-12 h-12 text-foreground-light" />
        </ScrollLink>
      </motion.div>
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
