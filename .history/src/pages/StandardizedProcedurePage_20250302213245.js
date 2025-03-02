"use client";

import React, { useState } from "react";
import { Legals, ContactSection, Loading, FadeOutOverlay } from "@/components";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";

const StandardizedProcedurePage = () => {
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  if (isGlobalsError) {
    return <div>error</div>;
  }

  // Determine if we should show the loader
  const isLoading = isGlobalsLoading || !globalsContent;

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {isLoading && <Loading />}
      <FadeOutOverlay loading={isLoading} />
      {globalsContent && (
        <>
          <Legals
            heroTitle="Terms & Conditions"
            content={globalsContent.termsAndConditions}
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

export default StandardizedProcedurePage;
