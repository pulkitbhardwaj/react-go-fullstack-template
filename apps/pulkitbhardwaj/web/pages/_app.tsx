import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Petricia</title>
        <meta name="description" content="" />
      </Head>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
