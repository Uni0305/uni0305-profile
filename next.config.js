/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/notion",
        destination:
          "https://uni0305.notion.site/Uni0305-5b9edf7665cd4c5c9ccce0d91cbad4e8",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/users/271102541444415488",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:contact@uni0305.me",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCqGmAGZDRrE1Dz6VNtf-gvA",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Uni0305",
        permanent: true,
      },
      {
        source: "/twitch",
        destination: "https://www.twitch.tv/uni0305",
        permanent: true,
      },
      {
        source: "/namemc",
        destination: "https://mine.ly/Uni0305.1",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
