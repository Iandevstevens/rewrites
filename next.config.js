/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about2",
        destination: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
