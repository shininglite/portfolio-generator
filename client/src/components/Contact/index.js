import React from "react";
import { InputGroup, FormControl, Container } from 'react-bootstrap';

import "./contactStyle.css"


function ContactComp() {

  return (
    <div className = "contactContainer">
      <Container className="container">
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="*Name"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  
    <InputGroup className="mb-3">
      <FormControl
        placeholder="*Email"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  
    <label htmlFor="basic-url">Message</label>

    <InputGroup>
      <FormControl 
      className="textBox"
      as="textarea" 
      aria-label="With textarea" 
      />
    </InputGroup>
    </Container>
  </div>
  
    )
  }
  export default ContactComp;