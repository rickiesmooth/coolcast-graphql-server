import { UserResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface UserParent {
    id: string;
    email: string;
    name?: string;
}

export const User: UserResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    email: parent => parent.email,
    name: parent => parent.name,
    chats: (parent, _args, ctx) => {
        return ctx.db.user({
            id: parent.id
        }).chats()
    },
    chat: (parent, { userId }, ctx) => {
        return ctx.db.user({
            id: parent.id
        }).chats({
            where: {
                users_some: {
                    id: userId
                }
            }
        })
    }
};
