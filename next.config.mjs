/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "www.alichowdhury.ca", "147.182.153.61"],
  },
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);