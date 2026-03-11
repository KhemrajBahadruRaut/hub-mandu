import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      //  LOCAL DEVELOPMENT
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/manduhub_backend/**",
      },

      // ( if serve images directly from main domain)
      // {
      //   protocol: "https",
      //   hostname: "himalayanthakali.com",
      //   pathname: "/himalayanthakali_backend/**",
      // },
    ],

    dangerouslyAllowLocalIP: true, // needed for localhost images
  },
};

export default nextConfig;
