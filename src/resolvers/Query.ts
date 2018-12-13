import { QueryResolvers } from "../generated/graphqlgen";
import { getUserId } from "../utils";

export interface QueryParent { }

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, context) => context.prisma.user({ id: getUserId(context) }),
  searchUser: (_parent, { string }, ctx) => ctx.prisma.users({ where: { name_contains: string } }),
  chat: async (parent, { userId }, ctx) => {
    const chat = await ctx.prisma.user({ id: getUserId(ctx) }).chats({
      where: {
        users_some: { id: userId }
      }
    })
    return chat && chat[0]
  }
};
