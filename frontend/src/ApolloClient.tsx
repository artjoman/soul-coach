import ApolloClient from "apollo-boost";

export const ReactApolloClient = new ApolloClient({
    uri: 'http://localhost:5500/graphql/',
  });