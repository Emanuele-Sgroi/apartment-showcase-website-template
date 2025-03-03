import LandingPage from "@/pages/LandingPage";
import { siteMetadata } from "../../administration/metadata";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.homepage.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.homepage.description || siteMetadata.defaultDescription,
  keywords: siteMetadata.homepage.keywords || siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url: siteMetadata.homepage.ogImage || siteMetadata.defaultOGImage,
      },
    ],
  },
};

export default function Home() {
  return <LandingPage />;
}
