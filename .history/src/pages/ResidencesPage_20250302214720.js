"use client";

import React, { useState } from "react";
import {
  ResidencesHeroSection,
  ResidencesSecondSection,
  CarouselTextSection,
  ResidencesTextOnlySection,
  ResidencesFullScreenImage,
  ResidencesLastSection,
  ContactSection,
  Loading,
  FadeOutOverlay,
  ErrorComponent,
} from "@/components";
import { useResidencesContent } from "@/hooks/useResidencesContent";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";

const ResidencesPage = () => {
  const { residencesContent, isResidencesError, isResidencesLoading } =
    useResidencesContent();
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  if (!isResidencesError || !isGlobalsError) {
    return <ErrorComponent />;
  }

  // Access the referenced Slides
  const slidesRef1 = residencesContent?.imagesCarousel1?.map(
    (slide) => slide.fields
  );
  const slidesRef2 = residencesContent?.imagesCarousel2?.map(
    (slide) => slide.fields
  );
  const slidesRef3 = residencesContent?.imagesCarousel3?.map(
    (slide) => slide.fields
  );

  // Determine if we should show the loader
  const isLoading =
    isResidencesLoading ||
    isGlobalsLoading ||
    !residencesContent ||
    !globalsContent;

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {isLoading && <Loading />}
      <FadeOutOverlay loading={isLoading} />
      {residencesContent && globalsContent && (
        <>
          <ResidencesHeroSection residencesContent={residencesContent} />
          <ResidencesSecondSection residencesContent={residencesContent} />
          <CarouselTextSection
            slidesRef={slidesRef1}
            text={residencesContent.textCarousel1}
            isTextOnTheLeft={false}
          />
          <CarouselTextSection
            slidesRef={slidesRef2}
            text={residencesContent.textCarousel2}
            isTextOnTheLeft={true}
          />
          <CarouselTextSection
            slidesRef={slidesRef3}
            text={residencesContent.textCarousel3}
            isTextOnTheLeft={false}
          />
          <ResidencesTextOnlySection
            smallTitle={residencesContent.textOnlySectionSmallTitle}
            title={residencesContent.textOnlySectionTitle}
            description={residencesContent.textOnlySectionDescription}
          />
          <ResidencesFullScreenImage
            imageDesktop={residencesContent.fullScreenImage}
            imageMobile={residencesContent.fullScreenImageMobile}
            alt={residencesContent.fullScreenImageAlt}
          />
          <ResidencesLastSection
            smallTitle={residencesContent.lastSectionSmallTitle}
            title={residencesContent.lastSectionTitle}
            description={residencesContent.lastSectionDescription}
            showButton={true}
            buttonText="INQUIRE"
            buttonLink="/inquire"
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

export default ResidencesPage;
