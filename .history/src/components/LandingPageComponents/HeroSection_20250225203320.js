"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ImageSlider, BackgroundVideo } from "@/components";

const HeroSection = () => {
  const [isCarousel, setIsCarousel] = useState(false);

  return (
    <section className="">
      {/* Image Slider or video and Hero section at the top level */}
      {isCarousel ? <ImageSlider /> : <BackgroundVideo />}
    </section>
  );
};

export default HeroSection;
