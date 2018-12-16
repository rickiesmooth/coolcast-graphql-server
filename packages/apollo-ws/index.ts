import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe, } from 'graphql'
import { schema } from "@coolcast/apollo-prisma";
import { createServer } from "http"

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
