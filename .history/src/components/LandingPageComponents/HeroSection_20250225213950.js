"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo, SingleImageBg } from "@/components";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [displayMode, setDisplayMode] = useState("video"); // Possible modes: "carousel", "video", "image"

  return (
    <section className="relative w-full min-h-screen h-full flex justify-center items-center p-6">
      {/* Hero content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-full flex justify-center items-center flex-col gap-6 z-10"
      >
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-foreground-light font-medium text-sm text-center"
        >
          PRIME WILLIAMSBURG
        </motion.h5>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
          className="display-font text-foreground-light text-center text-[37px] sm:text-2xl md:text-[55px] lg:text-3xl"
        >
          ONE NORTHSIDE PIERS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.5 }}
          className="text-foreground-light font-semibold text-center"
        >
          YOUR GATEWAY TO LUXURY WATERFRONT LIVING
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
        >
          <Link href="/inquiry" className="--btn-primary mt-6">
            INQUIRY
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer !z-20 transition-all duration-300 hover:opacity-80"
      >
        <ScrollLink to="second-section" smooth={true} duration={800}>
          <ChevronDown className="w-10 h-10 text-foreground-light" />
        </ScrollLink>
      </motion.div>

      {/* Overlay div */}
      <div className="__app_overlay_div"></div>
      {/* Render background based on display mode */}
      <div className="absolute top-0 left-0 w-full h-full z-[-2]">
        {displayMode === "carousel" && <ImageSlider />}
        {displayMode === "video" && <BackgroundVideo />}
        {displayMode === "image" && <SingleImageBg />}
      </div>
    </section>
  );
};

export default HeroSection;
