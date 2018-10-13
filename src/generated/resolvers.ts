import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
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

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
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

  export interface ArgsAddMessage {
    userId: string;
    text: string;
  }

  export type AddMessageType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsAddMessage,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"] | Promise<T["MessageParent"]>;

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
    addMessage: (
      parent: T["MutationParent"],
      args: ArgsAddMessage,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"] | Promise<T["MessageParent"]>;
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
  ) => string | null | Promise<string | null>;

  export type ReceivedMessagesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"][] | Promise<T["MessageParent"][]>;

  export type SentMessagesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["MessageParent"][] | Promise<T["MessageParent"][]>;

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
    ) => string | null | Promise<string | null>;
    receivedMessages: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"][] | Promise<T["MessageParent"][]>;
    sentMessages: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["MessageParent"][] | Promise<T["MessageParent"][]>;
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
  AuthPayload: AuthPayloadResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Message: MessageResolvers.Type<T>;
}
