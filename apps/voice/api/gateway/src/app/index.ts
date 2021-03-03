import { ApolloServer } from "apollo-server";
import gateway from "./app.gateway";

export default new ApolloServer({
  gateway,

  subscriptions: false,

  context: ({ req }) => ({ req, res: req.res }),

  cors: false,
});
