import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'http', hostname: 'localhost' },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3002",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3002",
        pathname: "/uploads/avatars/**",
      },
    ],
  },
};

export default nextConfig;
