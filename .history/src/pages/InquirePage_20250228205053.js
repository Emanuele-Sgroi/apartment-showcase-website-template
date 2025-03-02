"use client";

import React, { useState } from "react";
import {
  InquireHeroSection,
  InquireForm,
  InquireContact,
  Loading,
  FadeOutOverlay,
} from "@/components";
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
            title={inquirePageContent.heroTitle}
            subTitle={inquirePageContent.heroSubTitle}
          />
          <div className="w-full max-w-[1862px]">
            <div className="w-full flex items-end justify-start gap-20">
              <h2 className="display-font text-[78px] leading-[1]">
                {inquirePageContent.inquireSectionTitle}
              </h2>
              <p className="text-left text-lg">
                {inquirePageContent.inquireSectionDescription}
              </p>
            </div>
            <div>
              <InquireForm />
              <InquireContact />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default InquirePage;
