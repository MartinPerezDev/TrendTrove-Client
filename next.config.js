/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http2.mlstatic.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
