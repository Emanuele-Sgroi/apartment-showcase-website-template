"use client";

import React, { useState } from "react";
import {
  HeroSection,
  TextOnlySection,
  // ResidencesSection,
  // AmenitiesSection,
  // LocationSection,
  // DiscoverSection,
  // JoinSection,
  ImageSlider,
  BackgroundVideo,
} from "@/components";

const LandingPage = () => {
  const [isCarousel, setIsCarousel] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TextOnlySection id="about-section" />
      <div id="second-section" className="w-full h-screen bg-blue-500">
        test
      </div>
      {/* <div className="w-full h-full bg-background-primary overflow-hidden z-10">
        
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
