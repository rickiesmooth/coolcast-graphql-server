// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, Chat, Message } from "./prisma-client";
import { AuthPayload } from "../types";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsSearchUser {
    string: string;
  }

  export interface ArgsChat {
    userId: string;
  }

  export type MeResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type SearchUserResolver = (
    parent: undefined,
    args: ArgsSearchUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | null | Promise<User[] | null>;

  export type ChatResolver = (
    parent: undefined,
    args: ArgsChat,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Chat | null | Promise<Chat | null>;

  export interface Type {
    me: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    searchUser: (
      parent: undefined,
      args: ArgsSearchUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | null | Promise<User[] | null>;

    chat: (
      parent: undefined,
      args: ArgsChat,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Chat | null | Promise<Chat | null>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    name: (parent: User) => parent.name,
    email: (parent: User) => parent.email
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ChatsResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Chat[] | Promise<Chat[]>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    chats: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Chat[] | Promise<Chat[]>;
  }
}

export namespace ChatResolvers {
  export const defaultResolvers = {
    id: (parent: Chat) => parent.id
  };

  export type IdResolver = (
    parent: Chat,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MessagesResolver = (
    parent: Chat,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Message[] | Promise<Message[]>;

  export type UsersResolver = (
    parent: Chat,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export interface Type {
    id: (
      parent: Chat,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    messages: (
      parent: Chat,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Message[] | Promise<Message[]>;

    users: (
      parent: Chat,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;
  }
}

export namespace MessageResolvers {
  export const defaultResolvers = {
    id: (parent: Message) => parent.id,
    text: (parent: Message) => parent.text
  };

  export type IdResolver = (
    parent: Message,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TextResolver = (
    parent: Message,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FromResolver = (
    parent: Message,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    id: (
      parent: Message,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    text: (
      parent: Message,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    from: (
      parent: Message,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSignup {
    name: string;
    email: string;
    password: string;
  }

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export interface ArgsCreateChat {
    userId: string;
    text: string;
  }

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => AuthPayload | Promise<AuthPayload>;

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => AuthPayload | Promise<AuthPayload>;

  export type CreateChatResolver = (
    parent: undefined,
    args: ArgsCreateChat,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Chat | Promise<Chat>;

  export interface Type {
    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AuthPayload | Promise<AuthPayload>;

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AuthPayload | Promise<AuthPayload>;

    createChat: (
      parent: undefined,
      args: ArgsCreateChat,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Chat | Promise<Chat>;
  }
}

export namespace AuthPayloadResolvers {
  export const defaultResolvers = {
    token: (parent: AuthPayload) => parent.token,
    user: (parent: AuthPayload) => parent.user
  };

  export type TokenResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserResolver = (
    parent: AuthPayload,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    token: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    user: (
      parent: AuthPayload,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace SubscriptionResolvers {
  export const defaultResolvers = {};

  export type MessageAddedResolver = {
    subscribe: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => AsyncIterator<Message | null> | Promise<AsyncIterator<Message | null>>;
    resolve?: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Message | null | Promise<Message | null>;
  };

  export interface Type {
    messageAdded: {
      subscribe: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | AsyncIterator<Message | null>
        | Promise<AsyncIterator<Message | null>>;
      resolve?: (
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Message | null | Promise<Message | null>;
    };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Chat: ChatResolvers.Type;
  Message: MessageResolvers.Type;
  Mutation: MutationResolvers.Type;
  AuthPayload: AuthPayloadResolvers.Type;
  Subscription: SubscriptionResolvers.Type;
}