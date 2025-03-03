"use client";

import React, { useState } from "react";
import {
  Navbar,
  HeroSection,
  TextOnlySection,
  FullScreenImageSection,
  TextAndImageSection,
  AmenititesGallerySection,
  ContactSection,
  Loading,
  FadeOutOverlay,
  ErrorComponent,
} from "@/components";
import { useHomepageContent } from "@/hooks/useHomepageContent";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";

const LandingPage = () => {
  const { homepageContent, isHomepageError, isHomepageLoading } =
    useHomepageContent();
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  if (isHomepageError || isGlobalsError) {
    return <ErrorComponent />;
  }

  // Determine if we should show the loader
  const isLoading =
    isHomepageLoading ||
    isGlobalsLoading ||
    !homepageContent ||
    !globalsContent;

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {isLoading && <Loading />}
      <FadeOutOverlay loading={isLoading} />
      {homepageContent && globalsContent && (
        <>
          <Navbar globalsContent={globalsContent} />
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
            id="availability-section"
            smallTitle={homepageContent.inventorySmallTitle}
            title={homepageContent.inventoryTitle}
            description={homepageContent.inventoryDescription}
            showButton={true}
            buttonText="JOIN THE WAITLIST"
            buttonLink="/inquire"
          />
          <FullScreenImageSection
            imageDesktop={homepageContent.fullScreenImage3}
            imageMobile={homepageContent.fullScreenImage3Mobile}
            alt={homepageContent.fullScreenImage3Alt}
          />
          <ContactSection
            title={globalsContent.contactTitle}
            highlight={globalsContent.contactTitleHighlight}
            globalsContent={globalsContent}
          />
        </>
      )}
    </main>
  );
};

export default LandingPage;
