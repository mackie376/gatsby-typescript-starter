import { graphql, useStaticQuery } from 'gatsby';

type ResultType = {
  title: string;
  description: string;
  siteUrl: string;
  language: string;
};

const useSiteMetadata: () => ResultType = () => {
  const data = useStaticQuery<GatsbyTypes.SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            siteUrl
            description
            language
          }
        }
      }
    `
  );

  return data.site?.siteMetadata as ResultType;
};

export default useSiteMetadata;
