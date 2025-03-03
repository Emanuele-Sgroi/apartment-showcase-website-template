import React from "react";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  title: siteMetadata.termsAndConditions.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.termsAndConditions.description ||
    siteMetadata.defaultDescription,
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
