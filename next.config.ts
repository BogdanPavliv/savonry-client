import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3002",
      },
      {
        protocol: "https",
        hostname: "savonry-server-app-gki2.onrender.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "savonry-server-app-gki2.onrender.com",
        pathname: "/uploads/avatars/**",
      },
    ],
  },
};

export default nextConfig;