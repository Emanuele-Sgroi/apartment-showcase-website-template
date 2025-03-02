"use client";

import React, { useState } from "react";
import {
  HeroSection,
  TextOnlySection,
  FullScreenImageSection,
  TextAndImageSection,
  AmenititesGallerySection,
  ContactSection,
  Loading,
  FadeOutOverlay,
} from "@/components";
import { useHomepageContent } from "@/hooks/useHomepageContent";

const LandingPage = () => {
  const { homepageContent, isHomepageError, isHomepageLoading } =
    useHomepageContent();

  //destructure the content that is used directly in this component
  const {
    secondSectionSmallTitle,
    secondSectionTitle,
    secondSectionDescription,
  } = homepageContent;

  if (isHomepageError) {
    return <div>error</div>;
  }

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {(!homepageContent || isHomepageLoading) && <Loading />}
      <FadeOutOverlay loading={isHomepageLoading} />
      {homepageContent && (
        <>
          <HeroSection homepageContent={homepageContent} />
          <TextOnlySection
            id="second-section"
            smallTitle={secondSectionSmallTitle}
            title={secondSectionTitle}
            description={secondSectionDescription}
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
          <AmenititesGallerySection />
          <TextAndImageSection
            id="location-section"
            smallTitle="BROOKLYN, NY 11249"
            title="Prime Location"
            description="One Northside Piers is ideally situated in the heart of Williamsburg, steps away from the East River Ferry and surrounded by award-winning restaurants. Residents enjoy the convenience of a premium Brooklyn living with access to a 400-foot pier, scenic waterfront esplanade, green spaces, and the neighborhood's vibrant dining, shopping, and cultural attractions."
            showButton={true}
            buttonText="VIEW LOCATION"
            buttonLink="https://maps.app.goo.gl/KK9Kz8SqqKhrQMH97"
            image="/images/slider2.jpg"
            isTextOnTheLeft={false}
          />
          <FullScreenImageSection
            imageDesktop="/images/slider2.jpg"
            imageMobile="/images/slider3.jpg"
            alt="section_5"
          />
          <TextOnlySection
            id="join-section"
            smallTitle="INQUIRE ABOUT AVAILABILITY TODAY"
            title="Discover Upcoming Inventory"
            description="Looking to buy or rent a luxury condo apartment in Williamsburg? Explore upcoming and off-market listings at One Northside Piers and other premier buildings in the neighborhood. Join our waitlist for exclusive priority access to new listings and personalized assistance from our team."
            showButton={true}
            buttonText="JOIN THE WAITLIST"
            buttonLink="/inquire"
          />
          <FullScreenImageSection
            imageDesktop="/images/slider3.jpg"
            imageMobile="/images/slider3.jpg"
            alt="section_7"
          />
          <ContactSection />
        </>
      )}
    </main>
  );
};

export default LandingPage;
