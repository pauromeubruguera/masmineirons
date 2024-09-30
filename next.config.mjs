
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // Replace with the port number you're using
        pathname: '/uploads/**',
      },
    ],
    domains: ['res.cloudinary.com'],
  },
};

export default withNextIntl(nextConfig);
