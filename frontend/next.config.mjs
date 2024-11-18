/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'nf1v63fc-3000.use.devtunnels.ms',
      ],
    },
  },
};

export default nextConfig;
