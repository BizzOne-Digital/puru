import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Smaller build footprint on low-disk machines (fewer parallel page writes)
  experimental: {
    staticGenerationMaxConcurrency: 1,
    staticGenerationMinPagesPerWorker: 999,
  },
  images: {
    formats: ['image/webp'],
  },
};

export default nextConfig;
