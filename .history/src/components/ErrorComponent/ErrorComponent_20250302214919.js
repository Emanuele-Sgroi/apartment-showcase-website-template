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
          404 - Page Not Found
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-foreground-light mb-8">
          We can&apos;t seem to find what you&apos;re looking for.
        </p>
        <Link href="/" className="--btn-primary max-sm:text-xs">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
