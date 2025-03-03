import React from "react";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.termsAndConditions.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.termsAndConditions.description ||
    siteMetadata.defaultDescription,
  keywords:
    siteMetadata.termsAndConditions.keywords || siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url:
          siteMetadata.termsAndConditions.ogImage ||
          siteMetadata.defaultOGImage,
      },
    ],
  },
};

const TermsAndConditions = () => {
  return <TermsAndConditionsPage />;
};

export default TermsAndConditions;
