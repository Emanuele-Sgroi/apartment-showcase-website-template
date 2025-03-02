"use client";

import React, { useState } from "react";
import { InquireHeroSection, Loading, FadeOutOverlay } from "@/components";
import { useInquirePageContent } from "@/hooks/useInquireContent";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";

const InquirePage = () => {
  const { inquirePageContent, isInquirePageError, isInquirePageLoading } =
    useInquirePageContent();
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  if (isInquirePageError || isGlobalsError) {
    return <div>error</div>;
  }

  // Determine if we should show the loader
  const isLoading =
    isInquirePageLoading ||
    isGlobalsLoading ||
    !inquirePageContent ||
    !globalsContent;

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {isLoading && <Loading />}
      <FadeOutOverlay loading={isLoading} />
      {inquirePageContent && globalsContent && (
        <>
          <InquireHeroSection
            title={inquirePageContent}
            subTitle={inquirePageContent}
          />
        </>
      )}
    </main>
  );
};

export default InquirePage;
