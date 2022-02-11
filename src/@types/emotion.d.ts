import '@emotion/react';
import facepaint from 'facepaint';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
    };
    fonts: {
      baseSize: number[];
      headerSize: number[][];
      sans: string;
      weight: {
        normal: number;
        bold: number;
        heavy: number;
      };
    };
    layout: {
      maxWidth: number;
    };
    breakpoints: number[];
    mediaquery: facepaint.DynamicStyleFunction;
  }
}
