// this file provides code for the response to a query that doesn't return any books
// import React for rendering, and the Col, Row and Container elements in 'Grid.js'
import React from "react";
import { Container } from "semantic-ui-react";
import { NavigationBar } from "../components/HomeNav";

// this function returns the JSX elements to be rendered
function NoMatch() {
  return (
    <div>
      <NavigationBar />
      <Container fluid>
        <h1 className="text-center">404 Page Not Found</h1>
      </Container>
    </div>
  );
}

export default NoMatch;
