"use client";

import React, { useState } from "react";
import {
  ResidencesHeroSection,
  ResidencesSecondSection,
  CarouselTextSection,
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
        </>
      )}
    </main>
  );
};

export default ResidencesPage;
