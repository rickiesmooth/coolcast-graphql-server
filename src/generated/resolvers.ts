import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;

  QueryParent: any;
  MutationParent: any;
  SubscriptionParent: any;
  AuthPayloadParent: any;
  ChatParent: any;
  UserParent: any;
  MessageParent: any;
}

export namespace QueryResolvers {
  export type MeType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface ArgsSearchUser {
    string: string;
  }

  export type SearchUserType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsSearchUser,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | null | Promise<T["UserParent"][] | null>;

  export interface ArgsChat {
    userId: string;
  }

  export type ChatType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsChat,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ChatParent"] | null | Promise<T["ChatParent"] | null>;

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    searchUser: (
      parent: T["QueryParent"],
      args: ArgsSearchUser,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | null | Promise<T["UserParent"][] | null>;
    chat: (
      parent: T["QueryParent"],
      args: ArgsChat,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ChatParent"] | null | Promise<T["ChatParent"] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsSignup {
    name: string;
    email: string;
    password: string;
  }

  export type SignupType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsSignup,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsCreateChat {
    userId: string;
    text: string;
  }

  export type CreateChatType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateChat,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ChatParent"] | Promise<T["ChatParent"]>;

  export interface Type<T extends ITypeMap> {
    signup: (
      parent: T["MutationParent"],
      args: ArgsSignup,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    login: (
      parent: T["MutationParent"],
      args: ArgsLogin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    createChat: (
      parent: T["MutationParent"],
      args: ArgsCreateChat,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ChatParent"] | Promise<T["ChatParent"]>;
  }
}

export namespace SubscriptionResolvers {
  export type MessageAddedType<T extends ITypeMap> = (
    parent: T["SubscriptionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"] | null | Promise<T["MessageParent"] | null>;

  export interface Type<T extends ITypeMap> {
    messageAdded: (
      parent: T["SubscriptionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"] | null | Promise<T["MessageParent"] | null>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
  }
}

export namespace ChatResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["ChatParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MessagesType<T extends ITypeMap> = (
    parent: T["ChatParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"][] | Promise<T["MessageParent"][]>;

  export type UsersType<T extends ITypeMap> = (
    parent: T["ChatParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ChatParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    messages: (
      parent: T["ChatParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"][] | Promise<T["MessageParent"][]>;
    users: (
      parent: T["ChatParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
  }
}

export namespace UserResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ChatsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ChatParent"][] | Promise<T["ChatParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    email: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    name: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    chats: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ChatParent"][] | Promise<T["ChatParent"][]>;
  }
}

export namespace MessageResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["MessageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TextType<T extends ITypeMap> = (
    parent: T["MessageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["MessageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    text: (
      parent: T["MessageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  Subscription: SubscriptionResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  Chat: ChatResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Message: MessageResolvers.Type<T>;
}
