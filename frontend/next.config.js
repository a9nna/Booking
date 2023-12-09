/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_TEST: process.env.API_TEST,
    API_PATH: process.env.API_PATH,
  },
};

module.exports = nextConfig;
