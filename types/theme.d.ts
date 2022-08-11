import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      white: string;
      dark: Record<string, string>;
    };
  }
}
