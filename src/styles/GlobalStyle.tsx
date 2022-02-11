import React from 'react';
import { Global, css } from '@emotion/react';

import theme from './theme';

const GlobalStyle: React.FC = (props) => (
  <Global
    {...props}
    styles={css(
      theme.mediaquery({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        'h4, h5, h6, p, figure, blockquote, dl, dd': {
          margin: 0,
        },
        'ul[role="list"], ol[role="list"]': {
          listStyle: 'none',
        },
        'html:focus-within': {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
          fontFamily: theme.fonts.sans,
          fontSize: theme.fonts.baseSize,
          fontWeight: theme.fonts.weight.normal,
          lineHeight: 1.5,
          margin: 0,
          minHeight: '100vh',
          textRendering: 'optimizeSpeed',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontWeight: theme.fonts.weight.heavy,
        },
        'h1, h2, h3': {
          margin: '0.75rem 0',
        },
        h1: {
          fontSize: theme.fonts.headerSize[0],
        },
        h2: {
          fontSize: theme.fonts.headerSize[1],
        },
        h3: {
          fontSize: theme.fonts.headerSize[2],
        },
        'hgroup, h4, h5, h6': {
          fontSize: theme.fonts.headerSize[3],
        },
        p: {
          margin: '0.5rem 0',
          textAlign: 'center',
          wordBreak: 'break-all',
        },
        a: {
          color: theme.colors.secondary,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
          '&:not([class])': {
            textDecorationSkipInk: 'auto',
          },
        },
        'img, picture': {
          display: '100%',
          maxWidth: '100%',
        },
        'button, input, select, textarea': {
          font: 'inherit',
        },
        '@media (preferes-reduced-motion: reduce)': {
          'html:focus-within': {
            scrollBehavior: 'auto',
          },
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      })
    )}
  />
);

export default GlobalStyle;
