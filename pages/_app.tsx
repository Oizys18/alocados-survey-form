import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import Themes from "@base/Theme";
import { SurveyProvider } from "@context/SurveyContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SurveyProvider>
      <Themes.GlobalStyle />
      <ThemeProvider theme={Themes.theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SurveyProvider>
  );
}

export default MyApp;
