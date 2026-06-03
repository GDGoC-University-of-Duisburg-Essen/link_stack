import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/link_stack",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
