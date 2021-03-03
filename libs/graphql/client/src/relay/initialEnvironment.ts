import RelayServerSSR from "react-relay-network-modern-ssr/node8/server";
import {
  RelayNetworkLayer,
  urlMiddleware,
} from "react-relay-network-modern/node8";
import "regenerator-runtime/runtime";
import { Environment, RecordSource, Store } from "relay-runtime";

export function initialRelayEnvironment(relayServerSSR: RelayServerSSR) {
  const network = new RelayNetworkLayer([
    relayServerSSR.getMiddleware(),
    urlMiddleware({
      url: (req) => "http://localhost:4001",
      credentials: "include",
    }),
    // authMiddleware({
    //   token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    // }),
  ]);

  return new Environment({
    network,
    store: new Store(new RecordSource()),
  });
}
