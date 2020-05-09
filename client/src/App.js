import React, { Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import UserForm from './components/UserForm';
// import "./App.css";

const App = () => (
  <Fragment>
    <Container>

      <UserForm />
    </Container>
  </Fragment>
);


export default App;
