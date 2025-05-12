import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ⛔ 關掉 Next 的 image 最佳化功能
  },
}

export default nextConfig;