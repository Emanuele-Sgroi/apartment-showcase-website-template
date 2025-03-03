import LandingPage from "@/pages/LandingPage";
import { siteMetadata } from "../../administration/metadata";

export const metadata = {
  title: siteMetadata.homepage.title || siteMetadata.defaultTitle,
  description:
    siteMetadata.homepage.description || siteMetadata.defaultDescription,
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
