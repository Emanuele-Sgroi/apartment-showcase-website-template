"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo, SingleImageBg } from "@/components";

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
      </div>

      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>

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
