import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/"><strong>NYT Article Historian</strong></a>
    <a className="d-inline-flex justify-content-end" href="https://github.com/LOubouzar/ReactNYTScraper"><FontAwesomeIcon icon={["fab", "github"]} /></a>
  </nav>
);

export default Nav;
