import React from "react";
import InquirePage from "@/pages/InquirePage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.inquire.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.inquire.description || siteMetadata.defaultDescription,
  keywords: siteMetadata.inquire.keywords || siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url: siteMetadata.inquire.ogImage || siteMetadata.defaultOGImage,
      },
    ],
  },
};

const Inquire = () => {
  return <InquirePage />;
};

export default Inquire;
