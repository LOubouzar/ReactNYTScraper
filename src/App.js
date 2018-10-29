import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import NoMatch from "./pages";
import Nav from "./components/Nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fabGithub } from '@fortawesome/free-solid-svg-icons'

library.add(fab)

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Save} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

