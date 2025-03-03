import React from "react";
import StandardizedProcedurePage from "@/pages/StandardizedProcedurePage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.standardizedProcedure.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.standardizedProcedure.description ||
    siteMetadata.defaultDescription,
  keywords:
    siteMetadata.standardizedProcedure.keywords || siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url:
          siteMetadata.standardizedProcedure.ogImage ||
          siteMetadata.defaultOGImage,
      },
    ],
  },
};

const StandardizedProcedure = () => {
  return <StandardizedProcedurePage />;
};

export default StandardizedProcedure;
