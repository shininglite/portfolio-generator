import React from "react";
import PortCard from "../PortCard/portCard";
import { Row, Col } from "../Grid";

function PortCards(props) {
  return (
    <div>
      <Row>
        {props.repositories.map((repo, index) => (
          <Col size="md-6">
            <PortCard key={index} repo={repo} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PortCards;
