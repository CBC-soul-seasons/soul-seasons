import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/img/:path*",
        destination:
          "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev/img/:path*",
        permanent: true,
      },
      {
        source: "/sound/:path*",
        destination:
          "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev/sound/:path*",
        permanent: true,
      },
      {
        source: "/background/:path*",
        destination:
          "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev/background/:path*",
        permanent: true,
      },
      {
        source: "/7-3-3/:path*",
        destination:
          "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev/7-3-3/:path*",
        permanent: true,
      },
      {
        source: "/0-8/:path*",
        destination:
          "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev/0-8/:path*",
        permanent: true,
      },
      {
        source: "/icons/:path*",
        destination:
          "https://pub-f1dbf52f9b554de3865bdaf4633e1925.r2.dev/icons/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
