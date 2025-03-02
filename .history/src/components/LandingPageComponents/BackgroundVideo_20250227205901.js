"use client";

import { useState, useEffect } from "react";

const BackgroundVideo = ({ fallBackImage, videoWebP, videoMp4 }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Extract the first image for the fallback
  const fallBackImageUrl = fallBackImage[0]
    ? getAssetUrl(fallBackImage[0])
    : "";

  // Detect if the screen size is mobile ---> CURRENTLY UNUSED
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 768px)");
  //   setIsMobile(mediaQuery.matches);

  //   const handleResize = () => {
  //     setIsMobile(mediaQuery.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleResize);
  //   return () => mediaQuery.removeEventListener("change", handleResize);
  // }, []);

  return (
    <div className="w-full h-full overflow-hidden z-[-2]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={fallBackImageUrl} // fallback image
        className="w-full h-full object-cover object-center"
        crossOrigin="anonymous"
        disableRemotePlayback
      >
        {/* WebM video source - better compression for the web */}
        <source src={videoWebP} type="video/webm; codecs=vp8, vorbis" />

        {/* MP4 fallback for unsupported browsers */}
        <source
          src={videoMp4}
          type="video/mp4; codecs=avc1.42E01E, mp4a.40.2"
        />
      </video>
    </div>
  );
};

export default BackgroundVideo;

// [
//     {
//       "AllowedOrigins": [
//         "http://localhost:3000"
//       ],
//       "AllowedMethods": [
//         "GET"
//       ]
//     }
//   ]
