function newMessageSubscribe(parent, args, context, info) {
    return context.db.subscription.message(
        { where: { mutation_in: ['CREATED'] } },
        info
    );
}

export const Subscription = { messageAdded: newMessageSubscribe };
