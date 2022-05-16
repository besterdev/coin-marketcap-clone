/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "cdn.sanity.io"],
  },
};

module.exports = {
  images: {
    domains: [
      "s2.coinmarketcap.com",
      "s3.coinmarketcap.com",
      "cdn.sanity.io",
      "encrypted-tbn0.gstatic.com",
    ],
  },

  nextConfig,
};
