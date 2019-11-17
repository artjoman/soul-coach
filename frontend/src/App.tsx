import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Priests from './pages/priests/Priests';
import Header from './components/header/Header';
import HeaderWhite from './components/header-white/HeaderWhite';
import Streams from './pages/stream/Streams';

function AppRouter() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path="/" component={Header} /> 
        <Route path="/" component={HeaderWhite} /> 
        <div className="container-fluid">
          <Route path="/" exact component={Dashboard} />
          <Route path="/streams" component={Streams} />
          <Route path="/priests" component={Priests} />
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;

