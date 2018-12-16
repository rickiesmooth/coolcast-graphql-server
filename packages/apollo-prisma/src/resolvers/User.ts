import { UserResolvers } from '../../generated/graphqlgen'

export const User: UserResolvers.Type = {
    ...UserResolvers.defaultResolvers,

    chats: (parent, _args, ctx) => ctx.prisma.user({ id: parent.id }).chats(),
};
