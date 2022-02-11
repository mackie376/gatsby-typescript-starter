import facepaint from 'facepaint';

const maxWidth = 1060;
const baseFontSize = [14, 16];
const breakpoints = [576, 768, 992, maxWidth + baseFontSize[1] * 3];

const theme = {
  colors: {
    primary: '#00f',
    secondary: '#0f0',
    text: '#000',
    background: '#fff',
  },
  fonts: {
    baseSize: baseFontSize,
    headerSize: [
      [24, 28],
      [20, 22],
      [16, 18],
      [14, 16],
    ],
    sans: 'Noto Sans JP, sans-serif',
    weight: {
      normal: 400,
      bold: 700,
      heavy: 900,
    },
  },
  layout: {
    maxWidth,
  },
  breakpoints,
  mediaquery: facepaint(breakpoints.map((bp) => `@media screen and (min-width: ${bp}px)`)),
};

export default theme;
