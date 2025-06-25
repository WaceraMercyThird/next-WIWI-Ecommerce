/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/photos/**', // this matches URLs like /photos/6837218/pexels-photo-6837218.jpeg
        },
      ],
    },
  };
  
  export default nextConfig;
  