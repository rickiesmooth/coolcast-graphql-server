import { ApolloServer, defaultPlaygroundOptions, gql } from 'apollo-server-micro'
import * as fs from 'fs';

import { prisma } from "./generated/prisma-client";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: gql(`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`),
  resolvers: resolvers as any,
  context: ({ req }) => ({
    req,
    prisma,
  }),
  introspection: true,
  playground: defaultPlaygroundOptions
});

export default server.createHandler();
