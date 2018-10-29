import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fabGithub } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

const App = () => (
  <div>
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
      
    </Router>
    <Footer />
  </div>
);

export default App;

