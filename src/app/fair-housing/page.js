import React from "react";
import FairHousingPage from "@/pages/FairHousingPage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.fairHousing.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.fairHousing.description || siteMetadata.defaultDescription,
  keywords: siteMetadata.fairHousing.keywords || siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url: siteMetadata.fairHousing.ogImage || siteMetadata.defaultOGImage,
      },
    ],
  },
};

const FairHousing = () => {
  return <FairHousingPage />;
};

export default FairHousing;
