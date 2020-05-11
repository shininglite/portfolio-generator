import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin/Signin";

// Here is another way to set up imports.  I only did this on the about page to show how. Check out how the About pages exports.  You will need the curly brackets when importing.
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/HomeNav";

const App = () => {
  console.log("in App");
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Developer" component={Developer} />
            <Route exact path="/Signin" component={Signin} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
};

export default App;
