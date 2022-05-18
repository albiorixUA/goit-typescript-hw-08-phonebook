import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      button: string;
      buttonHover: string;
      black: string;
      white: string;
    };
  }
}
