import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      grey: string;
      orange: string;
    };
    fonts: {
      sm: string;
      md: string;
    };
  }
}
