"use client";
import React from "react";
import { Spinner } from "@/components";

const Loading = () => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 flex justify-center items-center bg-white/40">
      <Spinner size={80} color="black" />
    </div>
  );
};

export default Loading;
