import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import DevHeader from "../components/DevHeader";
import DevContainer from "../components/DevContainer";
import DevTable from "../components/DevTable";
import { NavigationBar } from "../components/DevHomeNav";

class Developer extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <DevHeader />
          <DevContainer />
          <DevTable />
        </Container>
      </div>
    );
  }
}

export default Developer;
