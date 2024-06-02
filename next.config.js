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

const withMDX = async () => {
  const nextMDX = (await import("@next/mdx")).default;
  const remarkGfm = (await import("remark-gfm")).default;
  const rehypePrism = (await import("@mapbox/rehype-prism")).default;

  return nextMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  })(nextConfig);
};

module.exports = withMDX();