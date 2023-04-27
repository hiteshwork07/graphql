import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
    uri: "https://gorest.co.in/public/v2/graphql",
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});
