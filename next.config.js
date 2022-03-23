/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about2",
        destination: "https://www.youtube.com/watch?v=R59e1Vl5lO8",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
