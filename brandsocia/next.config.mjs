/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
  },
  images: {
    domains: ['brandsocia.com', 'via.placeholder.com', 'images.unsplash.com','img.freepik.com','aceternity.com','logoipsum.com','static.thenounproject.com', 'images.pexels.com',
      'cdn.pixabay.com',
      'burst.shopifycdn.com'],
    unoptimized: true, // Add this if you're having image optimization issues
  },
}

export default nextConfig;