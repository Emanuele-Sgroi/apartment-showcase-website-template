"use client";

import React, { useState } from "react";
import {
  ResidencesHeroSection,
  ResidencesSecondSection,
  CarouselTextSection,
  ResidencesTextOnlySection,
  Loading,
  FadeOutOverlay,
} from "@/components";
import { useResidencesContent } from "@/hooks/useResidencesContent";

const ResidencesPage = () => {
  const { residencesContent, isResidencesError, isResidencesLoading } =
    useResidencesContent();

  if (isResidencesError) {
    return <div>error</div>;
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

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {(!residencesContent || isResidencesLoading) && <Loading />}
      <FadeOutOverlay loading={isResidencesLoading} />
      {residencesContent && (
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
        </>
      )}
    </main>
  );
};

export default ResidencesPage;
