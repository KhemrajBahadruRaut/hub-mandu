import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // LOCAL DEVELOPMENT
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "",
      //   pathname: "/manduhub_backend/**",
      // },
      // LIVE SERVER
      {
        protocol: "https",
        hostname: "mandu.gr8.com.np",
        port: "",
        pathname: "/menu/uploads/**",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;