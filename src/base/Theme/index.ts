import reset from "styled-reset";
import { createGlobalStyle, DefaultTheme, css } from "styled-components";

const fontsURL = {
  pretendard: {
    black: "/fonts/Pretendard-Black.woff2",
    extraBold: "/fonts/Pretendard-ExtraBold.woff2",
    semiBold: "/fonts/Pretendard-SemiBold.woff2",
    bold: "/fonts/Pretendard-Bold.woff2",
    medium: "/fonts/Pretendard-Medium.woff2",
    regular: "/fonts/Pretendard-Regular.woff2",
    light: "/fonts/Pretendard-Light.woff2",
    thin: "/fonts/Pretendard-Thin.woff2",
    extraLight: "/fonts/Pretendard-ExtraLight.woff2",
  },
};

const fonts = css`
  /**
  *  900    Black
  *  800    ExtraBold
  *  700    Bold
  *  600    Semibold
  *  500    Medium
  *  400    Regular
  *  300    Light
  *  200    Thin
  *  100    Extra Light
  **/

  /**
  * pretendard font
  **/

  @font-face {
    font-family: "pretendard";
    src: url(${fontsURL.pretendard.bold}) format("opentype");
    font-weight: 700;
  }
  @font-face {
    font-family: "pretendard";
    src: url(${fontsURL.pretendard.semiBold}) format("opentype");
    font-weight: 600;
  }
  @font-face {
    font-family: "pretendard";
    src: url(${fontsURL.pretendard.medium}) format("opentype");
    font-weight: 500;
  }
  @font-face {
    font-family: "pretendard";
    src: url(${fontsURL.pretendard.regular}) format("opentype");
    font-weight: 400;
  }
`;

export const theme: DefaultTheme = {
  color: {
    white: "#FFFFFF",
    dark: {
      shade000: "#2A3249",
      shade100: "#313C57",
      shade200: "#404E71",
      shade600: "#C8CCD7",
      primaryFont: "#AB9BFF",
      primary100: "#6B4FFF",
      accent100: "#F72585",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  html, body, #__next {
    height: 100%;
    font-family: 'pretendard';
    background-color: #131313;
    color:${theme.color.white};
  }
`;

const Themes = {
  theme,
  GlobalStyle,
};

export default Themes;
