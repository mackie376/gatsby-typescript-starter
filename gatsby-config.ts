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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
        // path: path.resolve(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@hooks': 'src/hooks',
          '@styles': 'src/styles',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Noto Sans JP:400,700,900'],
        display: 'swap',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-typescript-starter',
        short_name: 'gatsby-typescript-starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.beehive-dev.com',
        sitemap: 'https://www.beehive-dev.com/sitemap.xml',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/@types/gatsby-types.d.ts',
      },
    },
  ],
};

export default config;
