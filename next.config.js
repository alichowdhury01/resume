/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [require('@mapbox/rehype-prism')],
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

module.exports = withMDX(nextConfig);
