"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo, SingleImageBg } from "@/components";

const HeroSection = () => {
  const [displayMode, setDisplayMode] = useState("video"); // Possible modes: "carousel", "video", "image"

  return (
    <section className="w-full min-h-screen">
      {/* Hero content */}
      <h5>PRIME WILLIAMSBURG</h5>
      <h1 className="display-font">ONE NORTHSIDE PIERS</h1>
      <p>YOUR GATEWAY TO LUXURY WATERFRONT LIVING</p>

      {/* Overlay div */}
      <div className="__app_overlay_div"></div>
      {/* Render background based on display mode */}
      <div>
        {displayMode === "carousel" && <ImageSlider />}
        {displayMode === "video" && <BackgroundVideo />}
        {displayMode === "image" && <SingleImageBg />}
      </div>
    </section>
  );
};

export default HeroSection;
