import ApolloClient from "apollo-boost";

export const ReactApolloClient = new ApolloClient({
    uri: 'http://soulcoachapp.com:5500/graphql/',
  });