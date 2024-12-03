/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https", // Use the HTTPS protocol for secure requests
          hostname: "scontent.cdninstagram.com", // Instagram CDN hostname
          pathname: "/**", // Allow all paths under this hostname
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  