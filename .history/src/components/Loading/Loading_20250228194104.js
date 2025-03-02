"use client";

import React from "react";
import { Spinner } from "@/components";

const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-screen flex justify-center items-center bg-black/40 transition-opacity duration-700 z-[9999999]">
      <Spinner size={60} color="var(--foreground-light)" />
    </div>
  );
};

export default Loading;
