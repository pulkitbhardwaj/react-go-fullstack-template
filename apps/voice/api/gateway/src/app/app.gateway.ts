import { ApolloGateway, RemoteGraphQLDataSource } from "@apollo/gateway";

export default new ApolloGateway({
  serviceList: [{ name: "accounts", url: "http://localhost:4001" }],

  buildService: ({ url }) =>
    new RemoteGraphQLDataSource({
      url,

      // willSendRequest({ request, context }) {
      //   const headers = context.req.headers;
      //   // if (headers === undefined) return;

      //   Object.keys(headers).map((key) =>
      //     request.http?.headers.set(key, headers[key])
      //   );
      // },

      didReceiveResponse({ response, context }) {
        // if (context.res === undefined) return response;

        const cookie = response.http?.headers.get("Set-Cookie") || "No cookie";

        console.log("response ", response);

        console.log("Cookie: ", cookie);

        // if (cookie) {
        //   context.res.set("Set-Cookie", cookie);
        // }

        if (cookie) {
          context.responseCookies.push(cookie);
        }

        return response;
      },
    }),
});
