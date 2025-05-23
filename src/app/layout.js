import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer, DelayedPopup, GoogleAnalytics } from "@/components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { siteMetadata } from "../../administration/metadata";
import Script from "next/script";

export const metadata = {
  metadataBase: siteMetadata.baseUrl?.startsWith("http")
    ? new URL(siteMetadata.baseUrl)
    : undefined,
  title: siteMetadata.defaultTitle,
  description: siteMetadata.defaultDescription,
  keywords: siteMetadata.defaultKeywords,
  openGraph: {
    images: [
      {
        url: siteMetadata.defaultOGImage,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <DelayedPopup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
