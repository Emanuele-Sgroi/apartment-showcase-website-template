import React from "react";

const ErrorComponent = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[9999999999]">
      {/* Background Image (grayscale) */}
      <img
        src="images/newyork.png"
        alt="New York"
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
      />
      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold text-foreground-light mb-6">
          We Apologize — Our Website Is Temporarily Unavailable
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-foreground-light max-w-[600px] mb-8">
          Please try <strong>reloading</strong> this page. If the issue
          persists, we invite you to check back again shortly.
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
