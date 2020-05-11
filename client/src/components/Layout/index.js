import React from "react";
import Container from "react-bootstrap/Container";
// NOTE:
// You can do this 2 ways...
// 1) import Container from 'react-bootstrap/Container'
// 2) import { Container } from 'react-bootstrap';
//
// The best way to do this is #1.  The reason being is that you are pulling in 'Container' directly.  Line #2 pulls in the whole library and then deconstructs the 'Container'  You will take a hit on performance.
import "./style.css";

export const Layout = (props) => <Container>{props.children}</Container>;
