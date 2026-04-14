import type { Configuration } from 'webpack';
import withPWAInit from 'next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  webpack(config: Configuration): Configuration {
    const existing = config.module?.rules;
    const ruleList = Array.isArray(existing) ? existing : existing != null ? [existing] : [];
    config.module = {
      ...config.module,
      rules: [
        ...ruleList,
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: /react/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                typescript: true,
                dimensions: false,
                ref: true,
              },
            },
          ],
        },
      ],
    };
    return config;
  },
};

export default withPWA(nextConfig);