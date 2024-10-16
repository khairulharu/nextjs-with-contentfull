/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com"
      },
      {
       hostname: "images.ctfassets.net"
      }
    ]
  },
};

export default nextConfig;
