import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin/Signin";
import API from "./utils/API";

// Here is another way to set up imports.  I only did this on the about page to show how. Check out how the About pages exports.  You will need the curly brackets when importing.
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/HomeNav";
const App = () => {
  const [devData, setdevData] = useState({
    repositories: [],
    developerLoginName: "",
    developerGithubID: "",
    fname: "",
    lname: "",
    email: "",
  });

  useEffect(() => {
    initUser();
  }, []);

  async function initUser() {
    var message = "Enter Github ID to Initialize";

    await API.getActiveDeveloper()
      .then((res) => {
        if (res.data) {
          setdevData(res.data);
        }
        return res.data;
      })
      .then((devData) => {
        if (devData) {
          return devData;
        }
        var result = prompt(message);
        API.getsync(result);
        return devData;
      })
      .then((devData) => {
        if (devData) {
          return devData;
        }
        API.getActiveDeveloper().then((devData) => {
          return devData.data;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
