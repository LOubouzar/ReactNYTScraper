import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <strong>Leah Oubouzar 2018 &nbsp;</strong>
     <a className="d-inline-flex justify-content-end" href="https://github.com/LOubouzar/ReactNYTScraper"><FontAwesomeIcon icon={["fab", "github"]} /></a>
  </footer>
);

export default Footer;
