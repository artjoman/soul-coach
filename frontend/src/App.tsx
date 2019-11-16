import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';
import Stream from './pages/stream/Stream';

function AppRouter() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <div className="container-fluid">
          <Route path="/" exact component={Dashboard} />
          <Route path="/stream" component={Stream} />
        </div>
      </Router>

    </div>
  );
}

export default AppRouter;

