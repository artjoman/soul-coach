import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/header/Header';
import HeaderWhite from './components/header-white/HeaderWhite';
import Streams from './pages/stream/Streams';
import Start1 from './pages/start/Start1';
import Start2 from './pages/start/Start2';
import Priests from './pages/priests/Priests';

function AppRouter() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/dashboard" component={Header} />
        <Route path="(/streams|/priests|/toll4troll|/link)" component={HeaderWhite} />
        <div className="container-fluid">
          <Route path="/" exact component={Start1} />
          <Route path="/_start2" exact component={Start2} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/streams" component={Streams} />
          <Route path="/_start1" component={Start1} />
          <Route path="/link" component={Priests} />
        </div>
      </Router>
    </div>
  );
}

export default AppRouter;

