"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo, SingleImageBg } from "@/components";

const HeroSection = () => {
  const [isCarousel, setIsCarousel] = useState(true);

  return (
    <section className="w-full min-h-screen">
      {/* Image Slider or video and Hero section at the top level */}
      {isCarousel ? <ImageSlider /> : <BackgroundVideo />}
    </section>
  );
};

export default HeroSection;
