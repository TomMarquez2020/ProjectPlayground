//This will be where the side panel and main panel will live
import React from "react";
import ItemPanel from "./ItemPanel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import MainPanel from "./MainPanel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function MainUi() {
  return (
    <Container className="block-example border border-dark">
      <Row>
        <Col sm={3}>
          <ItemPanel />
        </Col>
        <Col>
          <MainPanel />
        </Col>
      </Row>
    </Container>
  );
}

export default MainUi;
