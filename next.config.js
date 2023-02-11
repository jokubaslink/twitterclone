/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['www.jsonkeeper.com', 'jsonkeeper.com'],
  },
}

module.exports = nextConfig
