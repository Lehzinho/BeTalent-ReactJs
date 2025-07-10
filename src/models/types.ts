export type ThemeType = {
  COLORS: {
    "Blue/Primary": string;
    "Blue 10": string;
    "Black/Neutral": string;
    "Gray_20/Neutral": string;
    "Gray_10/Neutral": string;
    "Gray_05/Neutral": string;
    "Gray_00/Neutral": string;
    "White/Neutral": string;
  };
  FONTS: {
    H1: string;
    H2: string;
    H3: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
