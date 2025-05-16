/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/machikado-quest' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/machikado-quest/' : '',
  images: {
    unoptimized: true,
    domains: [],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: {
      inlineStyle: true,
      fonts: true,
    },
  },
}

export default nextConfig
