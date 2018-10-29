import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => (
  <div>
    <Jumbotron>
      <h1 className="text-center"><strong> Saved NYT Articles</strong></h1>
    </Jumbotron>
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">No Articles Matched</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default NoMatch;
