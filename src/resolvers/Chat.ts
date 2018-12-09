import { ChatResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';
import { MessageParent } from "./Message"

export interface ChatParent {
    id: string;
    messages: MessageParent[];
}

export const Chat: ChatResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    messages: parent => parent.messages,
    users: parent => parent.users,
};

