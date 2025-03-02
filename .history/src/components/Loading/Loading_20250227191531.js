"use client";
import React from "react";
import { Spinner } from "@/components";

const Loading = () => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 bg-white/40">
      <Spinner />
    </div>
  );
};

export default Loading;
