/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'altweb-speakers.s3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  // experimental: {
  //   scrollRestoration: true,
  // },
}

module.exports = nextConfig
