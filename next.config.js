const nextConfig = {
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  images: {
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "asokeywordtool.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
};
module.exports = nextConfig
