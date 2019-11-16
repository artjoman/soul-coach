import React, { Component } from 'react';
import { ApolloProvider, useQuery } from 'react-apollo'

import { gql } from "apollo-boost";
import { ReactApolloClient } from '../../ApolloClient';
import {
  CardDeck, Card, CardImg,
  CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';
import './Streams.css';
import { NavLink } from 'react-router-dom';


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
          <div className="break-after-medium card-margin">
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
          </div>

          <div className="single-line card-margin">
            <span className="alignleft rvsp-date">{date}</span>
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
        <div className="single-line break-after-medium side-margin-small">
          <NavLink to={'/streams/upcoming'} activeClassName="active" className="streams-selector alignleft">Upcoming Streams</NavLink>
          <NavLink to={'/streams/recordings'} activeClassName="active" className="streams-selector alignright">Stream Recordings</NavLink>
          <div className="clear"></div>
        </div>
        <ApolloProvider client={ReactApolloClient}>
          <StreamList />
        </ApolloProvider>
      </div>
    );
  }
}

export default Streams;