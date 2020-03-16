import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ItemPanel() {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Close Panels
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>This where the Item panel will go</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default ItemPanel;
