/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfigDev = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodb_username: "lazar",
    mongodb_password: "lazar12345",
    mongodb_clustername: "cluster0",
    mongodb_database: "my-site-dev",
  },
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodb_username: "lazar",
    mongodb_password: "lazar12345",
    mongodb_clustername: "cluster0",
    mongodb_database: "my-site",
  },
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfigDev;
  }

  return nextConfig;
};
