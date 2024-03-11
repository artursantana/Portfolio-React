

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(node)$/,
      use: 'file-loader',
    });
    return config;
  },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Index',
          permanent: true,
        },
      ];
    },

  };
  