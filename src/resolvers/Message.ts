import { MessageResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

export interface MessageParent {
    id: string;
    text: string;
    from: string;
}

export const Message: MessageResolvers.Type<TypeMap> = {
    id: parent => parent.id,
    text: parent => parent.text,
    from: parent => parent.from
};

