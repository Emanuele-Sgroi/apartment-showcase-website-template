"use client";

import React, { useState } from "react";
import {
  NavbarGeneral,
  Legals,
  ContactSection,
  Loading,
  FadeOutOverlay,
  ErrorComponent,
} from "@/components";
import { useGlobalsContent } from "@/hooks/useGlobalsContent";

const StandardizedProcedurePage = () => {
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  if (isGlobalsError) {
    return <ErrorComponent />;
  }

  // Determine if we should show the loader
  const isLoading = isGlobalsLoading || !globalsContent;

  return (
    <main className="w-full relative overflow-hidden min-h-screen">
      {isLoading && <Loading />}
      <FadeOutOverlay loading={isLoading} />
      {globalsContent && (
        <>
          <NavbarGeneral globalsContent={globalsContent} />
          <Legals
            heroTitle="Standardized Procedure"
            content={globalsContent.standardizedProcedure}
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
