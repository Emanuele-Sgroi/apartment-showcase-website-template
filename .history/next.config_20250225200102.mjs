/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard for any domain
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**", // Allow all HTTP domains too
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
