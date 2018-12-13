import { MessageResolvers } from '../generated/graphqlgen'


export const Message: MessageResolvers.Type = {
    ...MessageResolvers.defaultResolvers,

    from: (parent, args, ctx) => {
        throw new Error("Resolver not implemented");
    }
};