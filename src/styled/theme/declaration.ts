import 'styled-components';

type TColor = (opacity?: number) => string;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: TColor;
      secondary: TColor;
      white: TColor;
      dark: TColor;
      turquoise: TColor;
      purple: TColor;
    };
    fonts: {
      main: string;
    };
  }
}
