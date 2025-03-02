import React from "react";

const FadeOutOverlay = ({ loading }) => {
  return (
    <div
      className={`w-full h-screen fixed inset-0 transition-opacity bg-background-light z-[999999] ${
        loading ? "overlay-stay " : "overlay-fade-out"
      }`}
    ></div>
  );
};

export default FadeOutOverlay;
