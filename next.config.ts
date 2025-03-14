/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Nodig omdat Next.js standaard een image optimizer gebruikt
  },
};

module.exports = nextConfig;