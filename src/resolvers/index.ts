import { IResolvers } from '../generated/resolvers';
import { TypeMap } from './types/TypeMap';

import { Query } from './Query';
import { Mutation } from './Mutation';
import { AuthPayload } from './AuthPayload';
import { User } from './User';
import { Subscription } from './Subscription';
import { Message } from './Message';
import { Chat } from './Chat';

export const resolvers: IResolvers<TypeMap> = {
    Query,
    Mutation,
    AuthPayload,
    User,
    Chat,
    Subscription,
    Message,
};
