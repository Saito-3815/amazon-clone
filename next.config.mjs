/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "fakestoreapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
