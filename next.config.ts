import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'http', hostname: 'localhost' },
      {
        protocol: "http",
        hostname: "localhost",
        port: "https://savonry-server-app-gki2.onrender.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "https://savonry-server-app-gki2.onrender.com",
        pathname: "/uploads/avatars/**",
      },
    ],
  },
};

export default nextConfig;
