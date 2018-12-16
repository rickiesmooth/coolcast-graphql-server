import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe, } from 'graphql'
import { createServer } from "http"
import { schema } from "@coolcast/apollo-prisma";

const websocketServer = createServer((request, response) => {
    response.writeHead(404);
    response.end();
});

websocketServer.listen(4010, () => console.log("he"))

SubscriptionServer.create(
    {
        schema,
        execute,
        subscribe,
    },
    {
        server: websocketServer,
        path: '/'
    }
)
