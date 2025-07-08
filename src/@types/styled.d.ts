/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import type { DefaultTheme } from "../styles/themes/default";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
