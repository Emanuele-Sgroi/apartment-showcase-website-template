"use client";
import React from "react";
import Image from "next/image";

const FullScreenImageSection = ({ image, alt }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full">
        <Image src={image} alt={alt} fill quality={100} priority />
      </div>
    </div>
  );
};

export default FullScreenImageSection;
