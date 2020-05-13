import React from "react";
import Card from "react-bootstrap/Card";
import "./portCard.css";
// import { Container } from "react-bootstrap";

export default function portCard(props) {
  let deploymentLink;
  if (props.repo.deploymentLink) {
    deploymentLink = (
      <Card.Link href={props.repo.deploymentLink} target={"_blank"}>
        Deployment Link
      </Card.Link>
    );
  } else {
    deploymentLink = "";
  }
  // <Card className="cardstyle">
  return (
    <Card style={{ width: "18rem", height: "18rem", margin: "1rem" }}>
      <Card.Body className="col-md-10">
        <Card.Title>{props.repo.repoName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
        <Card.Text>{props.repo.repoDesc}</Card.Text>
        <Card.Link target={"_blank"} href={props.repo.html_url}>
          Code Link
        </Card.Link>
        {deploymentLink}
      </Card.Body>
    </Card>
  );
}
