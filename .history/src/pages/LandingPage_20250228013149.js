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
            smallTitle={homepageContent.secondSectionSmallTitle}
            title={homepageContent.secondSectionTitle}
            description={homepageContent.secondSectionDescription}
            showButton={true}
            buttonText="CHECK AVAILABILITY"
            buttonLink="/inquire"
          />
          <FullScreenImageSection
            imageDesktop={homepageContent.fullScreenImage1}
            imageMobile={homepageContent.fullScreenImage1Mobile}
            alt={homepageContent?.altTextFullImg1}
          />
          <TextAndImageSection
            id="residences-section"
            smallTitle={homepageContent.residentsSmallTitle}
            title={homepageContent.residentsTitle}
            description={homepageContent.residentsDescription}
            showButton={true}
            buttonText="EXPLORE RESIDENCES"
            buttonLink="/residences"
            image={homepageContent?.residentsImage}
            isTextOnTheLeft={homepageContent.residentsSectionIsTextOnTheLeft}
          />
          <TextOnlySection
            id="amenities-section"
            smallTitle={homepageContent.amenitiesSmallTitle}
            title={homepageContent.amenitiesTitle}
            description={homepageContent.amenitiesDescription}
            showButton={false}
            buttonText=""
            buttonLink="/"
          />
          <AmenititesGallerySection homepageContent={homepageContent} />
          <TextAndImageSection
            id="location-section"
            smallTitle={homepageContent.locationSmallTitle}
            title={homepageContent.locationTitle}
            description={homepageContent.locationDescription}
            showButton={true}
            buttonText="VIEW LOCATION"
            buttonLink={homepageContent.locationUrl}
            image={homepageContent.locationImage}
            isTextOnTheLeft={homepageContent.locationSectionIsTextOnTheLeft}
          />
          <FullScreenImageSection
            imageDesktop={homepageContent.fullScreenImage2}
            imageMobile={homepageContent.fullScreenImage2Mobile}
            alt={homepageContent.fullScreenImage2Alt}
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
