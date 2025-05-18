/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 本番環境でのみ静的エクスポートを行う
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  basePath: process.env.NODE_ENV === 'production' ? '/machikado-quest' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/machikado-quest/' : '',
  images: {
    unoptimized: true,
    // 開発環境では標準の画像ローダーを使用
    ...(process.env.NODE_ENV === 'production' 
      ? { 
          loader: 'custom',
          loaderFile: './image-loader.js',
        } 
      : {})
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
