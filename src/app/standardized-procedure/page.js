import React from "react";
import StandardizedProcedurePage from "@/pages/StandardizedProcedurePage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  title: siteMetadata.standardizedProcedure.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.standardizedProcedure.description ||
    siteMetadata.defaultDescription,
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
