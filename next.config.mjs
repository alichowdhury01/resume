/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import sharp from 'sharp';
const withImage=require('next-images')

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig = {
  images: {
    // path: '/_next/image',
    path: ['/_next/image', '/_next/images', '/public/image/', '/_next/public/images/'],
  },
  experimental: {
    mdxRs: true,
  },
};
module.exports = withImage()


