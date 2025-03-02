"use client";

import React, { useState } from "react";
import {
  HeroSection,
  TextOnlySection,
  FullScreenImageSection,
  // ResidencesSection,
  // AmenitiesSection,
  // LocationSection,
  // DiscoverSection,
  // JoinSection,
} from "@/components";

const LandingPage = () => {
  const [isCarousel, setIsCarousel] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TextOnlySection
        id="second-section"
        smallTitle="WELCOME TO ONE NORTHSIDE PIERS"
        title={"Elevated Waterfront Living."}
        description="Experience luxury living at One Northside Piers, one of Williamsburg's most desirable condominium buildings. Discover stunning residences with breathtaking Manhattan skyline and East River views, access to world-class amenities, and a prime location in a vibrant community. Whether you're looking to buy or rent, One Northside Piers offers an exceptional lifestyle."
        showButton={true}
        buttonText="CHECK AVAILABILITY"
        buttonLink="/residences"
      />
      <FullScreenImageSection
        imageDesktop="/images/slider1.jpg"
        imageMobile="/images/slider3.jpg"
        alt="section_3"
      />
      <div className="w-full h-screen bg-blue-500">test</div>
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
