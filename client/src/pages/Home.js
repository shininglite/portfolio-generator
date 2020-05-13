import React, { useState, useEffect } from "react";
import { Jumbotron } from "../components/JumboTron";
import PortCards from "../components/PortCards/portCards";
import SearchBar from "../components/SearchBar/searchBar";
import { Container } from "react-bootstrap";
import API from "../utils/API";

function Home() {
  const [devData, setdevData] = useState({
    repositories: [],
    developerLoginName: "",
    developerGithubID: "",
    fname: "",
    lname: "",
    email: "",
  });

  useEffect(() => {
    API.getActiveDevData().then((res) => {
      setdevData(res.data);
    });
  }, []);

  return (
    <div>
      <Jumbotron></Jumbotron>
      <Container>
        <SearchBar></SearchBar>
      </Container>
      <Container>
        <PortCards repositories={devData.repositories}></PortCards>
      </Container>
    </div>
  );
}

export default Home;
