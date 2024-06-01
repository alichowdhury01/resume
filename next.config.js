/** @type {import('next').NextConfig} */
const nextMDX = require("@next/mdx");
const remarkGfm = require("remark-gfm");
const rehypePrism = require("@mapbox/rehype-prism");

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "www.alichowdhury.ca", "147.182.153.61"],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX(nextConfig);
