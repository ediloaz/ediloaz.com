import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ediloaz.com",
          },
        ],
        destination: "https://www.ediloaz.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
