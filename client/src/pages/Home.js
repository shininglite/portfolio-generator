import React, { useState, useEffect, useContext } from "react";
import { Jumbotron } from "../components/JumboTron";
import PortCards from "../components/PortCards/portCards";
import SearchBar from "../components/SearchBar/searchBar";
import { Container, Button, Row } from "react-bootstrap";
import DevDataContext from "../utils/DevDataContext";
import SetupContext from "../utils/SetupContext";
import API from "../utils/API";

function Home() {
  const { devData } = useContext(DevDataContext);
  const { setup, setSetup } = useContext(SetupContext);
  const [displayRepos, setdisplayRepos] = useState({
    displayRepos: devData.repositories,
  });

  const handleInputChange = (event) => {
    const filter = event.target.value;
    var filteredRepos = devData.repositories.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    console.log("displayRepos:", filteredRepos);
    setdisplayRepos({
      displayRepos: filteredRepos,
    });
  };
  const resetSearch = (e) => {
    setdisplayRepos({ displayRepos: devData.repositories });
  };

  return (
    <div>
      <Jumbotron></Jumbotron>
      <Container>
        <Row>
          <SearchBar
            handleInputChange={handleInputChange}
            resetSearch={resetSearch}
          ></SearchBar>
        </Row>
      </Container>
      <Container>
        <PortCards repositories={displayRepos.displayRepos}></PortCards>
      </Container>
    </div>
  );
}

export default Home;
