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
    <section className="w-full min-h-screen h-full flex justify-center items-center">
      {/* Hero content */}
      <div className="relative w-full h-full flex justify-center items-center flex-col gap-6 z-10">
        <h5 className="text-foreground-light font-medium text-sm">
          PRIME WILLIAMSBURG
        </h5>
        <h1 className="display-font text-foreground-light ">
          ONE NORTHSIDE PIERS
        </h1>
        <p className="text-foreground-light font-semibold">
          YOUR GATEWAY TO LUXURY WATERFRONT LIVING
        </p>
        <Link href="/inquiry" className="--btn-primary mt-6">
          INQUIRY
        </Link>

        {/* Arrow */}
        <ScrollLink
          to="second-section"
          smooth={true}
          duration={800}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 transition-all duration-300 hover:opacity-80"
        >
          <ChevronDown className="w-10 h-10 text-foreground-light animate-bounce" />
        </ScrollLink>
      </div>

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
