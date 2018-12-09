import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { MutationResolvers } from '../generated/resolvers';
import { APP_SECRET } from '../utils';
import { TypeMap } from './types/TypeMap';
import { getUserId } from '../utils'

export interface MutationParent { }

export const Mutation: MutationResolvers.Type<TypeMap> = {
    signup: async (_parent, { password, name, email }, ctx) => {
        const hashedPassword = await hash(password, 10);
        const user = await ctx.db.createUser({
            name,
            email,
            password: hashedPassword,
        });

        return {
            token: sign({ userId: user.id }, APP_SECRET),
            user
        };
    },

    createChat: async (_parent, { userId, text }, ctx) => {
        const id = getUserId(ctx)
        const chat = await ctx.db.createChat({
            users: { connect: [{ id }, { id: userId }] },
            messages: {
                create: {
                    text,
                    from: {
                        connect: {
                            id
                        }
                    }
                }
            }
        })
        return chat
    },

    login: async (_parent, { email, password }, ctx) => {
        const user = await ctx.db.user({ email });

        if (!user) {
            throw new Error(`No user found for email: ${email}`);
        }

        const valid = await compare(password, user.password);
        if (!valid) {
            throw new Error('Invalid password');
        }

        return {
            token: sign({ userId: user.id }, APP_SECRET),
            user
        };
    }
};
