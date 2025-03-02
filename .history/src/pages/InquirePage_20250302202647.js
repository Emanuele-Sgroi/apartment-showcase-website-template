"use client";

import React, { useState } from "react";
import {
  InquireHeroSection,
  InquireForm,
  InquireContact,
  Loading,
  FadeOutOverlay,
  ThankYouModal,
} from "@/components";
import { useInquirePageContent } from "@/hooks/useInquireContent";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";

const InquirePage = () => {
  const { inquirePageContent, isInquirePageError, isInquirePageLoading } =
    useInquirePageContent();
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isInquirePageError || isGlobalsError) {
    return <div>error</div>;
  }

  // Determine if we should show the loader
  const isLoading =
    isInquirePageLoading ||
    isGlobalsLoading ||
    !inquirePageContent ||
    !globalsContent;

  //function to handle submit backend
  const handleSubmit = () => {
    setIsModalOpen(true);
  };

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
          <div className="w-full max-w-[1260px] min-[2048px]:max-w-[1450px] py-[30px] md:py-[60px] 2xl:py-[90px] min-[2048px]:py-[120px] px-8 max-[500px]:px-6 max-[340px]:px-4">
            <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-start gap-6 md:gap-20 border-b border-background-dark pb-4 md:pb-8 ">
              <h2 className="display-font max-[500px]:text-xl text-2xl md:text-[60px] xl:text-[78px] min-[2048px]:text-[100px] leading-[1]">
                {inquirePageContent.inquireSectionTitle}
              </h2>
              <p className="text-left text-base md:text-md xl:text-lg min-[2048px]:text-[24px]">
                {inquirePageContent.inquireSectionDescription}
              </p>
            </div>
            <div className="w-full flex justify-between max-[820px]:flex-col gap-12 md:gap-16 xl:gap-24 pt-10 sm:pt-12">
              <InquireForm onSubmit={handleSubmit} />
              <InquireContact globalsContent={globalsContent} />
            </div>
          </div>
        </>
      )}
      {/* Show modal when submitted successfully */}
      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={globalsContent.thankYouModalTitle}
        titleHighlight={globalsContent.thankYouModalTitleHighlight}
        description={globalsContent.thankYouModalDescription}
        image={globalsContent.thankYouModalImage}
      />
    </main>
  );
};

export default InquirePage;
