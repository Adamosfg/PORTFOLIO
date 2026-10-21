import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

// ponytail: Lean MDX integration without heavy plugins
const withMDX = createMDX({});

export default withMDX(nextConfig);
