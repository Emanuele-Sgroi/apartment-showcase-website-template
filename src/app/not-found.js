import React from "react";
import NotFoundPage from "@/pages/NotFoundPage";
import { siteMetadata } from "../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.NotFound.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.NotFound.description || siteMetadata.defaultDescription,
  openGraph: {
    images: [
      {
        url: siteMetadata.NotFound.ogImage || siteMetadata.defaultOGImage,
      },
    ],
  },
};

const NotFound = () => {
  return <NotFoundPage />;
};

export default NotFound;
