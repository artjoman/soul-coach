import React, { Component } from 'react';
import StreamPlayer from '../../components/stream-player/StreamPlayer';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, useQuery } from 'react-apollo'

import { gql } from "apollo-boost";
import { ReactApolloClient } from '../../ApolloClient';

function StreamList() {
  const { loading, error, data } = useQuery(gql`
    {
      streams {
        streamId
        name
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.streams.map(({ streamId, name }) => (
    <div key={streamId}>
      <p>
        {streamId}: {name}
      </p>
    </div>
  ));
}

class Stream extends Component {


  render() {
    return (
      <ApolloProvider client={ReactApolloClient}>
        <StreamList />
      </ApolloProvider>
    );
  }
}

export default Stream;