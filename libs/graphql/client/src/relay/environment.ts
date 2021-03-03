import {
  RelayNetworkLayer,
  urlMiddleware,
} from "react-relay-network-modern/node8";
import "regenerator-runtime/runtime";
import { Environment, RecordSource, Store } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: (req) => "http://localhost:4001",
    credentials: "include",
  }),
  // authMiddleware({
  //   token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  // }),
]);

export function relayEnvironment(records?: RecordMap) {
  return new Environment({
    network,
    store: new Store(new RecordSource(records)),
  });
}
