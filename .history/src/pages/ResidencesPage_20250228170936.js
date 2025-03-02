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

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {(!residencesContent || isResidencesLoading) && <Loading />}
      <FadeOutOverlay loading={isResidencesLoading} />
      {residencesContent && (
        <>
          <ResidencesHeroSection residencesContent={residencesContent} />
          <ResidencesSecondSection residencesContent={residencesContent} />
          <CarouselTextSection
            residencesContent={residencesContent}
            isTextOnTheLeft={false}
          />
        </>
      )}
    </main>
  );
};

export default ResidencesPage;
