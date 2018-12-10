import { UserResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';
import { ChatParent } from './Chat';

export interface UserParent {
    id: string;
    email: string;
    name?: string;
    chats?: ChatParent[];
}

export const User: UserResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    email: parent => parent.email,
    name: parent => parent.name,
    chats: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).chats(),
};
