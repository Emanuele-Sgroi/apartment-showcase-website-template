import React from "react";
import ResidencesPage from "@/pages/ResidencesPage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.residences.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.residences.description || siteMetadata.defaultDescription,
  keywords: siteMetadata.residences.keywords || siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url: siteMetadata.residences.ogImage || siteMetadata.defaultOGImage,
      },
    ],
  },
};

const Residences = () => {
  return <ResidencesPage />;
};

export default Residences;
