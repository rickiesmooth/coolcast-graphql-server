import { ChatResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';
import { MessageParent } from "./Message"
import { UserParent } from "./User"


export interface ChatParent {
    id: string;
    messages: MessageParent[];
    users: UserParent[];
}

export const Chat: ChatResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    messages: parent => parent.messages,
    users: parent => parent.users,
};

