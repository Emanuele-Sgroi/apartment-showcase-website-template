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
    <main className="w-full flex flex-col items-center relative overflow-hidden min-h-screen">
      {isLoading && <Loading />}
      <FadeOutOverlay loading={isLoading} />
      {inquirePageContent && globalsContent && (
        <>
          <InquireHeroSection
            title={inquirePageContent.heroTitle}
            subTitle={inquirePageContent.heroSubTitle}
          />
          <div className="w-full max-w-[1260px] min-[2048px]:max-w-[1450px] py-[30px] md:py-[60px] 2xl:py-[90px] min-[2048px]:py-[120px] px-8">
            <div className="w-full flex items-end justify-start gap-20 border-b border-background-dark pb-8 ">
              <h2 className="display-font text-[78px] min-[2048px]:text-[90px] leading-[1]">
                {inquirePageContent.inquireSectionTitle}
              </h2>
              <p className="text-left text-lg">
                {inquirePageContent.inquireSectionDescription}
              </p>
            </div>
            <div className="w-full flex justify-between gap-24 pt-12">
              <InquireForm />
              <InquireContact globalsContent={globalsContent} />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default InquirePage;
