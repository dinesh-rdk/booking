import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './modules/Register';
import Dashboard from './modules/Dashboard';
import Layout from './Layout';

export default function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
