import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  // Serve static assets efficiently
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
