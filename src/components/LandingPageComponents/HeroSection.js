"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo, SingleImageBg } from "@/components";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ homepageContent }) => {
  // destructurate data from CMS
  const {
    heroTitle,
    heroParagraph,
    heroDisplayMode,
    heroBackgroundImages,
    heroBackgroundImagesMobile,
    heroVideoWebP,
    heroVideoMp4,
  } = homepageContent;

  return (
    <section className="relative w-full min-h-screen h-full flex justify-center items-center p-6">
      {/* Hero content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-full flex justify-center items-center flex-col gap-6 z-10 pb-28 md:pb-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="display-font text-foreground-light text-center text-[37px] sm:text-2xl md:text-[55px] lg:text-3xl xl:text-[85px] min-[2048px]:text-[100px]"
        >
          {heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
          className="text-foreground-light font-medium tracking-wider text-center text-sm sm:text-base lg:text-[19px] min-[2048px]:text-lg"
        >
          {heroParagraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
        >
          <Link
            href="/inquire"
            className="--btn-primary mt-6 min-[2048px]:text-lg"
          >
            INQUIRE
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
        className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer !z-20 transition-all duration-300 hover:opacity-80"
      >
        <ScrollLink to="second-section" smooth={true} duration={800}>
          <ChevronDown className="w-10 min-[2048px]:w-12 h-10 min-[2048px]:h-12 text-foreground-light" />
        </ScrollLink>
      </motion.div>

      {/* Overlay div */}
      <div className="__app_overlay_div"></div>
      {/* Render background based on display mode */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        {heroDisplayMode === "carousel" && (
          <ImageSlider
            heroTitle={heroTitle}
            desktopImages={heroBackgroundImages}
            mobileImages={heroBackgroundImagesMobile}
          />
        )}
        {heroDisplayMode === "video" && (
          <BackgroundVideo
            fallBackImage={heroBackgroundImages}
            videoWebP={heroVideoWebP}
            videoMp4={heroVideoMp4}
          />
        )}
        {heroDisplayMode === "image" && (
          <SingleImageBg
            heroTitle={heroTitle}
            desktopImages={heroBackgroundImages}
            mobileImages={heroBackgroundImagesMobile}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
