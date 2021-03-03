import { CSSBaseline } from "@incroy/ui/web";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Petricia</title>
        <meta name="description" content="" />
      </Head>
      <ThemeProvider theme={theme}>
        <CSSBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
