import { QueryResolvers } from "../generated/resolvers";
import { getUserId } from "../utils";
import { TypeMap } from "./types/TypeMap";

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  me: (_parent, _args, ctx) => ctx.db.user({ id: getUserId(ctx) }),
  searchUser: (_parent, { string }, ctx) =>
    ctx.db.users({
      where: { name_contains: string }
    })
};
