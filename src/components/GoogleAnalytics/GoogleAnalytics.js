"use client";

import { useGlobalsContent } from "@/hooks/useGlobalsContent";
import Script from "next/script";

const GoogleAnalytics = () => {
  const { globalsContent, isGlobalsError, isGlobalsLoading } =
    useGlobalsContent();

  if (!globalsContent || isGlobalsError || isGlobalsLoading) return null; // Don't render anything if there's no GA ID

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${globalsContent.gooogleAnalyticsId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${globalsContent.gooogleAnalyticsId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
