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
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Noto Sans JP:400,700,900'],
        display: 'swap',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-typescript-starter',
        short_name: 'gatsby-typescript-starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: path.resolve(__dirname, 'src', 'images', 'icon.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: path.resolve(__dirname, 'src', '@types', 'gatsby-types.d.ts'),
      },
    },
  ],
};

export default config;
