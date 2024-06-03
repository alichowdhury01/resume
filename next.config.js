/** @type {import('next').NextConfig} */
const withMDX = async () => {
  const nextMDX = (await import('@next/mdx')).default;
  const remarkGfm = (await import('remark-gfm')).default;
  const rehypePrism = (await import('@mapbox/rehype-prism')).default;

  return nextMDX({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  })({
    images: {
      domains: ["images.unsplash.com", "res.cloudinary.com", "www.alichowdhury.ca", "147.182.153.61"],
    },
    experimental: {
      mdxRs: true,
    },
  });
};

module.exports = withMDX();
