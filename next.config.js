/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/about2",
        destination: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        source: "/s/player/293baa5d/www-player.css",
        destination: "https://www.youtube.com/s/player/293baa5d/www-player.css",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
