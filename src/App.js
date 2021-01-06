import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./modules/Dashboard";
import Register from "./modules/Register";
import Booking from "./modules/Booking";
import Layout from "./Layout";

export default function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
