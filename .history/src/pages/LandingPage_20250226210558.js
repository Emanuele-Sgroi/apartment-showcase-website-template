"use client";

import React, { useState } from "react";
import {
  HeroSection,
  TextOnlySection,
  FullScreenImageSection,
  TextAndImageSection,
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
        buttonLink="/inquire"
      />
      <FullScreenImageSection
        imageDesktop="/images/slider1.jpg"
        imageMobile="/images/slider3.jpg"
        alt="section_3"
      />
      <TextAndImageSection
        id="residences-section"
        smallTitle="FIND YOUR DREAM HOME"
        title="Luxury Residences"
        description="Thoughtfully designed condominium residences provide an unparalleled level of comfort and sophistication. With breathtaking skyline and river views, high-end finishes, spacious layouts, and access to world-class amenities, these apartments offer the ultimate luxury living on the Williamsburg waterfront."
        showButton={true}
        buttonText="EXPLORE RESIDENCES"
        buttonLink="/residences"
        image="/images/slider2.jpg"
        isTextOnTheLeft={true}
      />
      <TextOnlySection
        id="amenities-section"
        smallTitle="ENHANCE YOU LIFE"
        title="Unmatched Building Amenities."
        description="Residents of this luxury Williamsburg condominium enjoy a wide range of exceptional amenities, including a heated indoor pool, hot tub, sauna, a state-of-the-art fitness center with a yoga room, resident lounge, screening room, and much more. Experience the convenience and exclusivity of living in a full-service building with a 24-hour concierge."
        showButton={false}
        buttonText=""
        buttonLink="/"
      />
      {/* <TextAndImageSection
        id="residences-section"
        smallTitle="FIND YOUR DREAM HOME"
        title="Luxury Residences"
        description="Thoughtfully designed condominium residences provide an unparalleled level of comfort and sophistication. With breathtaking skyline and river views, high-end finishes, spacious layouts, and access to world-class amenities, these apartments offer the ultimate luxury living on the Williamsburg waterfront."
        showButton={true}
        buttonText="EXPLORE RESIDENCES"
        buttonLink="/residences"
        image="/images/slider2.jpg"
        isTextOnTheLeft={false}
      /> */}
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
