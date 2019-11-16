import React, { Component } from 'react';
import { ApolloProvider, useQuery } from 'react-apollo'

import { gql } from "apollo-boost";
import { ReactApolloClient } from '../../ApolloClient';
import {
  CardDeck, Card, CardImg,
  CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';
import './Streams.css';


function StreamList() {
  const { loading, error, data } = useQuery(gql`
    {
      streams {
        streamId
        name
        description
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  var tempDate = new Date();
  var date = tempDate.getDate() + '.' + (tempDate.getMonth() + 1) + '.' + tempDate.getFullYear();


  return data.streams.map(({ streamId, name, description }) => (

    <a href={"/stream/" + streamId}>
      <div className="online-streams break-after-medium">
        <Card>
          <CardImg class="" top width="100%" src={require('../../assets/images/stream' + streamId + '.jpg')} alt={name} />
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{description}</CardSubtitle>

          <div className="single-line">
            <span className="alignleft">{date}</span>
            <span className="rvsp-link alignright">RVSP ></span>
            <div className="clear"></div>
          </div>
        </Card>
      </div>
    </a>
  ));
}

class Streams extends Component {


  render() {
    return (
      <div className="dashboard-container">
        <ApolloProvider client={ReactApolloClient}>
          <StreamList />
        </ApolloProvider>
      </div>
    );
  }
}

export default Streams;