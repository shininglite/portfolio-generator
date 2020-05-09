import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import Home from './pages/Home';
import Developer from './pages/Developer';
import Login from './pages/Login';
import NoMatch from "./pages/NoMatch";

// import UserForm from './components/UserForm';
// import "./App.css";

const App = () => {
  console.log('in App')
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={Developer} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    </Router>
  )
};


export default App;