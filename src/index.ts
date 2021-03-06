import * as Koa from "koa"
import { ApolloServer, defaultPlaygroundOptions } from 'apollo-server-koa';
import { prisma, resolvers, typeDefs } from "@coolcast/apollo-prisma"

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  subscriptions: false,
  playground: defaultPlaygroundOptions,
  context: ({ ctx }) => {
    return {
      request: ctx.request,
      prisma,
    }
  },
  introspection: true,
});

const app = new Koa();
server.applyMiddleware({ app, cors: true });

if (process.env.NODE_ENV === "develop") {
  app.listen(3000)
}

export default app.callback();

