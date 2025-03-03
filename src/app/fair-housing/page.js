import React from "react";
import FairHousingPage from "@/pages/FairHousingPage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  title: siteMetadata.fairHousing.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.fairHousing.description || siteMetadata.defaultDescription,
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
