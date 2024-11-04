import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

import { onError } from "@apollo/client/link/error";

const url = process.env.REACT_APP_API_URL || "http://localhost:4000/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`GraphQL error: ${message}`);
    });
  }
  if (networkError) {
    console.log(`Network error: ${networkError}`);
  }
});

const link = from([errorLink, new HttpLink({ uri: url })]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
