/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about2",
        destination: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        source: "/s/:path*",
        destination: "https://www.youtube.com/s/:path*",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
