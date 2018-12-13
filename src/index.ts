import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { resolvers } from './resolvers'
import { typeDefs } from "./schema"

const server = new GraphQLServer({
  typeDefs,
  resolvers: resolvers as any,
  context: request => ({
    ...request,
    prisma,
  }),
});

server.start(() => { console.log(`Server started, listening on port for incoming requests.`); })
