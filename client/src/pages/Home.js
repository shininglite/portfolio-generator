import React, { useState, useEffect, useContext } from "react";
import { Jumbotron } from "../components/JumboTron";
import PortCards from "../components/PortCards/portCards";
import SearchBar from "../components/SearchBar/searchBar";
import { Container, Button, Row } from "react-bootstrap";
import DevDataContext from "../utils/DevDataContext";
import API from "../utils/API";

function Home() {
  const { devData, setDevData } = useContext(DevDataContext);
  const [search, setsearch] = useState({});

  const resetSearch = (e) => {
    console.log("reset");
  };
  // NOTE:  This is needed because we are not using hooks in the development page.
  // =>
  useEffect(() => {
    console.log("start");
    initDevData();
    console.log("end");
  }, []);

  async function initDevData() {
    return new Promise((res, rej) => {
      API.getActiveDevData().then((activeDevData) => {
        console.log("got it");
        if (activeDevData.data) {
          setDevData(activeDevData.data);
          res(activeDevData.data);
        } else {
          res(activeDevData.data);
        }
      });
    });
  }
  // <= This is needed because we are not using hooks in the development page
  //
  // handleInputChange = (event) => {
  //   console.log("hi");
  // };
  const handleInputChange = (event) => {
    console.log("hi");
    // setDevData();
  };

  return (
    <div>
      <Jumbotron></Jumbotron>
      <Container>
        <Row>
          <SearchBar props={handleInputChange}></SearchBar>
        </Row>
      </Container>
      <Container>
        <PortCards repositories={devData.repositories}></PortCards>
      </Container>
    </div>
  );
}

export default Home;
