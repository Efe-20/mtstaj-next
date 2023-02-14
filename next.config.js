/** @type {import('next').NextConfig} */

const { API_URL, API_TOKEN } = process.env;

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL,
    API_TOKEN,
  },
};

module.exports = nextConfig;
