import React from "react";

const ResidencesSecondSection = ({ residencesContent }) => {
  // Extract the image from CMS
  const imageUrl = residencesContent?.heroImage
    ? getAssetUrl(residencesContent.heroImage)
    : "";

  if (!imageUrl) {
    return null;
  }

  return (
    <section className="w-full bg-background-light py-[56px] md:py-[80px] 2xl:py-[120px] min-[2048px]:py-[200px] md:px-10 xl:px-[64px] 2xl:px-[120px] min-[2048px]:px-[200px]">
      <div className="w-full flex items-start justify-center"></div>
    </section>
  );
};

export default ResidencesSecondSection;
