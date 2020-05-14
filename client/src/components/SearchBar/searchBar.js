import React, { useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// import DevDataContext from "../utils/DevDataContext";

export default function searchBar({ handleInputChange }) {
  // const { devData, setDevData } = useContext(DevDataContext);
  // console.log(props);
  return (
    <InputGroup>
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => handleInputChange(e)}
      />
      <InputGroup.Append>
        <Button
          // onChange={(e) => {
          //   console.log("got it");
          //   props.resetSearch(e);
          // }}
          variant="outline-secondary"
        >
          Clear
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
