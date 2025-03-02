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

  return (
    <section className="relative w-full min-h-[calc(100vh-66px)]  lg:min-h-screen flex justify-center items-center flex-col gap-2 bg-cover bg-center overflow-hidden px-6">
      <motion.h1
        className="font-display font-bold max-[500px]:text-[34px] text-2xl sm:text-[44px] md:text-[54px] lg:text-[70px] xl:text-[106px] text-center drop-shadow-2xl z-20"
        initial={{ opacity: 0, y: -50 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
      >
        <span style={{ opacity: textOpacity }}>1 NORTHSIDE PIERS</span>
      </motion.h1>
      <motion.h4
        className="font-display font-light max-[500px]:text-[16px] text-[19px] sm:text-[21px] md:text-[23px] lg:text-[28px] xl:text-[38px] drop-shadow-2xl text-center z-20"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <span style={{ opacity: textOpacity }}>
          Luxury condominium in Williamsburg
        </span>
      </motion.h4>
      {/* Animated Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-12 w-full flex items-center justify-center z-20"
      >
        <ScrollLink to="about-section" smooth={true} duration={800}>
          <button className="cursor-pointer z-20">
            <ChevronDown
              size={48}
              strokeWidth={1.5}
              className="text-foreground-primary transition"
            />
          </button>
        </ScrollLink>
      </motion.div>
      <div className="__app_overlay_div" />
      <div
        className="absolute top-0 left-0 w-full h-full bg-black z-[9]"
        style={{ opacity: overlayOpacity }}
      />
    </section>
  );
};

export default HeroSection;
