/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nodig omdat Next.js standaard een image optimizer gebruikt
  },
  basePath: "/PvdUS", // Vervang dit met de naam van je GitHub repository
  assetPrefix: "/PvdUS/", // Nodig voor statische assets
};

module.exports = nextConfig;