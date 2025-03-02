"use client";

import React, { useState } from "react";
import {
  HeroSection,
  AboutSection,
  ResidencesSection,
  AmenitiesSection,
  LocationSection,
  DiscoverSection,
  JoinSection,
  ImageSlider,
  BackgroundVideo,
} from "@/components";

const LandingPage = () => {
  const [isCarousel, setIsCarousel] = useState(false);

  return (
    <main className="relative overflow-hidden">
      {/* Image Slider or video and Hero section at the top level */}
      {isCarousel ? <ImageSlider /> : <BackgroundVideo />}
      <HeroSection />
      {/* <div className="w-full h-full bg-background-primary overflow-hidden z-10">
        <AboutSection />
        <ResidencesSection />
        <AmenitiesSection />

        <LocationSection />

        <DiscoverSection />

        <JoinSection />
      </div> */}
    </main>
  );
};

export default LandingPage;
