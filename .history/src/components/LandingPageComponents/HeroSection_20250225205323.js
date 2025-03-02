"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo, SingleImageBg } from "@/components";

const HeroSection = () => {
  const [displayMode, setDisplayMode] = useState("video"); // Possible modes: "carousel", "video", "image"

  return (
    <section className="w-full min-h-screen">
      {/* Overlay div */}
      <div className="__app_overlay_div"></div>
      {/* Render background based on display mode */}
      {displayMode === "carousel" && <ImageSlider />}
      {displayMode === "video" && <BackgroundVideo />}
      {displayMode === "image" && <SingleImageBg />}
    </section>
  );
};

export default HeroSection;
