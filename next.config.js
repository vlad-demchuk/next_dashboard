/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    // To turn on caching from Next 14
    // staleTimes: {
    //   dynamic: 30
    // }
  },
};

module.exports = nextConfig;
