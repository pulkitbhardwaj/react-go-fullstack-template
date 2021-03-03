import { RemoteGraphQLDataSource } from "@apollo/gateway";

export default new RemoteGraphQLDataSource({
  // willSendRequest({ request, context }: any) {
  //   const headers = context.req.headers;
  //   if (headers === undefined) return;

  //   Object.keys(headers).map((key) =>
  //     request.http.headers.set(key, headers[key])
  //   );
  // }

  didReceiveResponse({ response, context }: any) {
    // if (context.res === undefined) return response;

    const cookie = response.http.headers.get("Set-Cookie");

    console.log(cookie);

    // if (cookie) {
    //   context.res.set("Set-Cookie", cookie);
    // }

    if (cookie) {
      context.responseCookies.push(cookie);
    }

    return response;
  },
});
