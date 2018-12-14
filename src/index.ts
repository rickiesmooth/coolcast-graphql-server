import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import { resolvers } from './resolvers'

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers: resolvers as any,
  context: request => ({
    ...request,
    prisma,
  }),
});

server.start({ port: 3030 }, ({ port }) => { console.log(`Server started, listening on port ${port} for incoming requests`); })
