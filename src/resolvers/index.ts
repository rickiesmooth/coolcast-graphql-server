import { Query } from './Query';
import { Mutation } from './Mutation';
import { AuthPayload } from './AuthPayload';
import { User } from './User';
import { Message } from './Message';
import { Chat } from './Chat';
import { Subscription } from "./Subscription"

export const resolvers = {
    Query,
    Mutation,
    AuthPayload,
    User,
    Chat,
    Message,
    Subscription
};
