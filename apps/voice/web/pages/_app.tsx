import { relayEnvironment } from "@incroy/graphql/client";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC, Fragment, useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { ThemeProvider } from "styled-components";

interface Props extends AppProps {
  records?: RecordMap;
}

const App: FC<AppProps> = ({ Component, pageProps, records: r }: Props) => {
  const records: RecordMap = useMemo(() => {
    if (r) return r;
    if (typeof document !== "undefined") {
      const recordsData = document.getElementById("relay-data")?.innerHTML;
      if (recordsData)
        return JSON.parse(Buffer.from(recordsData, "base64").toString());
    }
    return {};
  }, [r]);

  return (
    <Fragment>
      <Head>
        <title>Petricia</title>
        <meta name="description" content="" />
      </Head>
      <ThemeProvider theme={{}}>
        <RelayEnvironmentProvider environment={relayEnvironment(records)}>
          <Component {...pageProps} />
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
