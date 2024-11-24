/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-alpha-sig.figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

