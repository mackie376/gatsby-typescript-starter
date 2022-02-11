import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { theme } from '../styles';

const wrapRootElement: React.FC<{ element: React.ReactNode }> = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default wrapRootElement;
