import React, { useState, useEffect, useContext } from "react";
import { DevJumbotron } from "../components/DevJumboTron";
import PortCards from "../components/PortCards/portCards";
import SearchBar from "../components/SearchBar/searchBar";
import { Container, Button, Row } from "react-bootstrap";
import DevDataContext from "../utils/DevDataContext";
import { NavigationBar } from "../components/DevHomeNav";
import API from "../utils/API";

function DevHome() {
  const { devData, setDevData } = useContext(DevDataContext);
  const { devSetup, setDevSetup } = useState({
    isLoadedFlag: false,
    initialized: false,
  });
  const [displayRepos, setdisplayRepos] = useState({
    displayRepos: devData.repositories,
  });

  // API.getActiveDevData().then((activeDevData) => {
  //   if (activeDevData.data) {
  //     setDevData(activeDevData.data);
  //     console.log("yup");
  //     setDevSetup({
  //       isLoadedFlag: true,
  //       initialized: true,
  //     });
  //   } else {
  //     console.log("nope");
  //     setDevSetup({
  //       isLoadedFlag: true,
  //       initialized: false,
  //     });
  //   }
  // });

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
      {/* {devSetup.isLoadedFlag ? ( */}
      <div>
        <NavigationBar />
        <DevJumbotron></DevJumbotron>
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
      {/* ) : null}
      ; */}
    </div>
  );
}

export default DevHome;
