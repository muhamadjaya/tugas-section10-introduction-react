import React from "react";

import Home from "./components/pages/Home";
import Navbar from "./components/inc/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact_us";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
