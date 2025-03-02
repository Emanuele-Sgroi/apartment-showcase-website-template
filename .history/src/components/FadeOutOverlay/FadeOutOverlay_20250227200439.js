import React from "react";

const FadeOutOverlay = ({ loading }) => {
  return (
    <div
      className={`w-full h-screen bg-background-light ${
        loading ? "overlay-stay " : "overlay-fade-out"
      }`}
    >
      FadeOutOverlay
    </div>
  );
};

export default FadeOutOverlay;
