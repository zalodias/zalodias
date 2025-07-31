const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/archive/projects',
        permanent: true,
      },
      {
        source: '/projects/:slug*',
        destination: '/archive/projects/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
