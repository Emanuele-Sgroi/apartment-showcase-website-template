"use client";

import { useState, useEffect } from "react";

const BackgroundVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className=" w-full h-full overflow-hidden z-[-2]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/slider1.jpg" // High-quality fallback image
        className=" w-full h-full object-cover object-center"
        crossOrigin="anonymous"
        disableRemotePlayback
      >
        {/* WebM video source - better compression for the web */}
        <source
          src="https://pub-7a8afa530a63426482b591b8468ac3c1.r2.dev/video.webm"
          type="video/webm; codecs=vp8, vorbis"
        />

        {/* MP4 fallback for unsupported browsers */}
        <source
          src="https://pub-7a8afa530a63426482b591b8468ac3c1.r2.dev/videomp.mp4"
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
