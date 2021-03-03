import { initialRelayEnvironment } from "@incroy/graphql/client";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React, { Fragment, ReactElement } from "react";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";
import { RelayEnvironmentProvider } from "react-relay/hooks";
// import "regenerator-runtime/runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { ServerStyleSheet } from "styled-components";

interface Props {
  records: RecordMap;
  styles: ReactElement;
}

export default class extends Document<Props> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & Props> {
    const sheet = new ServerStyleSheet();

    const relayServerSSR = new RelayServerSSR();
    const env = initialRelayEnvironment(relayServerSSR);

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <RelayEnvironmentProvider environment={env}>
                <App {...props} />
              </RelayEnvironmentProvider>
            ),
        });

      await Document.getInitialProps(ctx);
      await relayServerSSR.getCache();
      const records = env.getStore().getSource().toJSON();

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            return (
              <App
                {...props}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                records={records}
              />
            );
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        records,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <template id="relay-data">
            {Buffer.from(JSON.stringify(this.props.records)).toString("base64")}
          </template>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
