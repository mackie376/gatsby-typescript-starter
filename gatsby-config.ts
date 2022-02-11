import path from 'path';
import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'gatsby-typescript-starter',
    description: 'Gatsby TypeScript Starter',
    siteUrl: 'https://www.beehive-dev.com',
    language: 'ja',
  },
  pathPrefix: process.env.PATH_PREFIX || '',
  plugins: [
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: path.resolve(__dirname, 'src', '@types', 'gatsby-types.d.ts'),
      },
    },
  ],
};

export default config;
