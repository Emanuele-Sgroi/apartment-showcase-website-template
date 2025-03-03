import React from "react";
import InquirePage from "@/pages/InquirePage";
import { siteMetadata } from "../../../administration/metadata";

export const metadata = {
  title: siteMetadata.inquire.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.inquire.description || siteMetadata.defaultDescription,
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
