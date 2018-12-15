const { ApolloServer } = require('apollo-server-micro');
const cors = require('micro-cors')();

const { prisma } = require("./generated/prisma-client");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  typeDefs: `type Query {
    me: User
    searchUser(string: String!): [User]
    chat(userId: String!): Chat
    recentChats: [Chat]
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    createChat(userId: ID!, text: String!): Chat!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Chat {
    id: ID!
    messages: [Message!]!
    users: [User!]!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    chats: [Chat!]
  }

  type Message {
    id: ID!
    text: String!
    from: User!
  }

  type Subscription {
    messageAdded: Message
  }`,
  resolvers: resolvers as any,
  context: request => ({
    ...request,
    prisma,
  }),
});

module.exports = cors(server.createHandler());
