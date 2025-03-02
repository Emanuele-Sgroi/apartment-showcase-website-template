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
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-2]">
      {/* <iframe
        src={`https://www.youtube.com/embed/FxIVq49JDF8?autoplay=1&mute=1&loop=1&playlist=FxIVq49JDF8&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0&iv_load_policy=3`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen={false}
        className="absolute top-0 left-0 w-full h-full min-w-[100vw] min-h-[100vh] object-cover border-0 pointer-events-none"
      ></iframe> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/slider1.jpg" // High-quality fallback image
        className="absolute top-0 left-0 w-full h-full object-cover"
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
