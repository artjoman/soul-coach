import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';
import Streams from './pages/stream/Streams';
import ApolloClient, { gql } from 'apollo-boost';
import { useQuery, ApolloProvider } from 'react-apollo';

function AppRouter() {
  return (
    <div className="App">
      <Header></Header>

      <Router>
        <div className="container-fluid">
          <Route path="/" exact component={Dashboard} />
          <Route path="/stream" component={Streams} />
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;

