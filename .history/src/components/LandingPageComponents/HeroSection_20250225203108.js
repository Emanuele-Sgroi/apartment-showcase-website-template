"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const [textOpacity, setTextOpacity] = useState(1);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeTextStart = 0;
      const fadeTextEnd = 500;
      const fadeOverlayStart = 400;
      const fadeOverlayEnd = 900;

      // Calculate opacity
      let newTextOpacity =
        1 - (scrollY - fadeTextStart) / (fadeTextEnd - fadeTextStart);
      let newOverlayOpacity =
        0 + (scrollY - fadeOverlayStart) / (fadeOverlayEnd - fadeOverlayStart);

      // Clamp opacity between 0 and 1
      newTextOpacity = Math.max(0, Math.min(1, newTextOpacity));
      newOverlayOpacity = Math.max(0, Math.min(0.9, newOverlayOpacity));

      //console.log("ScrollY:", scrollY, "Opacity:", newOverlayOpacity); // Debugging

      setTextOpacity(newTextOpacity);
      setOverlayOpacity(newOverlayOpacity);
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <section className=""></section>;
};

export default HeroSection;
