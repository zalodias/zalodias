const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.{glsl,vs,fs,vert,frag}': {
        loaders: ['./assets/shaders/raw-loader.cjs'],
        as: '*.js',
      },
    },
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
