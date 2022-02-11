import React from 'react';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from '../styles';

const IndexPage: React.FC = () => (
  <>
    <Helmet
      htmlAttributes={{ lang: 'ja' }}
      title="gatsby-typescript-starter"
      meta={[{ name: 'description', content: 'gatsby typescript starter' }]}
    />
    <div>
      <GlobalStyle />
      <div>Hello World</div>
    </div>
  </>
);

export default IndexPage;
