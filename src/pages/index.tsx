import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '@hooks';
import { GlobalStyle } from '@styles';

const IndexPage: React.FC = () => {
  const meta = useSiteMetadata();

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: meta.language }}
        title={meta.title}
        meta={[{ name: 'description', content: meta.description }]}
      />
      <div>
        <GlobalStyle />
        <div>Hello World</div>
      </div>
    </>
  );
};

export default IndexPage;
