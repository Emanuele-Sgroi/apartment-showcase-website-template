"use client";
import React from "react";
import { Spinner } from "@/components";

const Loading = () => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 flex justify-center items-center bg-black/40 z-[999999]">
      <Spinner size={60} color="var(--foreground-light)" />
    </div>
  );
};

export default Loading;
