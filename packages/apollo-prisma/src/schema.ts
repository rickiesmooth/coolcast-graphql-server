import * as fs from 'fs';
import { gql } from 'apollo-server-koa';
import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers"

export const typeDefs = gql(`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`)

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
} as any)