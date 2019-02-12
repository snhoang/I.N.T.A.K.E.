import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import Caffeine from "./pages/Caffeine";
import Sugar from "./pages/Sugar";
import Alcohol from "./pages/Alcohol";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/caffeine" component={Caffeine} />
          <Route exact path="/sugar" component={Sugar} />
          <Route exact path="/alcohol" component={Alcohol} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
