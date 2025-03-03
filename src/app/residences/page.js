import React from "react";
import ResidencesPage from "@/pages/ResidencesPage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  title: siteMetadata.residences.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.residences.description || siteMetadata.defaultDescription,
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
