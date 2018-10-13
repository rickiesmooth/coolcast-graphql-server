import { UserResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface UserParent {
    id: string;
    email: string;
    name?: string;
    receivedMessages?: any[];
    sentMessages?: any[];
}

export const User: UserResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    email: parent => parent.email,
    name: parent => parent.name,
    receivedMessages: parent => parent.receivedMessages,
    sentMessages: parent => parent.sentMessages
};
