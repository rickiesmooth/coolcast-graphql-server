import { ChatResolvers } from '../../generated/graphqlgen';
import { getUserId } from "../utils";

export const Chat: ChatResolvers.Type = {
    ...ChatResolvers.defaultResolvers,

    messages: (parent, _args, ctx) => ctx.prisma.chat({ id: parent.id }).messages(),
    // @TODO dont expose users to chat: users > chat
    toUser: async (parent, _args, ctx) => {
        const user = await ctx.prisma.chat({ id: parent.id }).users();
        return user[0]
    },
};
