"use client";

import React from "react";

const Spinner = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className="animate-spin"
    >
      <style>
        {`
          .spinner_b2T7 {
            animation: spinner_xe7Q 0.8s linear infinite;
          }
          .spinner_YRVV {
            animation-delay: -0.65s;
          }
          .spinner_c9oY {
            animation-delay: -0.5s;
          }
          @keyframes spinner_xe7Q {
            93.75%, 100% { r: 3px; }
            46.875% { r: 0.2px; }
          }
        `}
      </style>
      <circle className="spinner_b2T7" cx="4" cy="12" r="3" />
      <circle className="spinner_b2T7 spinner_YRVV" cx="12" cy="12" r="3" />
      <circle className="spinner_b2T7 spinner_c9oY" cx="20" cy="12" r="3" />
    </svg>
  );
};

export default Spinner;
