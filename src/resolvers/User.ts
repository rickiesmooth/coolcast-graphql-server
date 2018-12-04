import { UserResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface UserParent {
    id: string;
    email: string;
    name?: string;
    chats?: any;
}

export const User: UserResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    email: parent => parent.email,
    name: parent => parent.name,
    chats: parent => parent.chats,
};
