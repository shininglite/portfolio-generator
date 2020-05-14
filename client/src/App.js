import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Home from "./pages/Home";
import TestPage from "./pages/TestPage";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin/Signin";
import API from "./utils/API";
import DevDataContext from "./utils/DevDataContext";

// Here is another way to set up imports.  I only did this on the about page to show how. Check out how the About pages exports.  You will need the curly brackets when importing.
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/HomeNav";
//
const App = () => {
  const [devData, setDevData] = useState({
    repositories: [],
    developerLoginName: "",
    developerGithubID: "",
    fname: "",
    lname: "",
    email: "",
    isLoaded: "",
  });

  useEffect(() => {
    console.log("start");
    initialization();
    console.log("end");
  }, []);

  async function initialization() {
    //
    console.log("start initDevData1");
    const activeDevData = await initDevData();
    console.log("devData", devData); // <-- This is null.
    console.log("activeDevData", activeDevData); // <-- This is populated.
    console.log("end initDevData1");
    //
    if (!activeDevData) {
      //
      console.log("start syncUser");
      const userLoaded = await syncUser();
      console.log("end syncUser");
      //  KIERAN at this point, I need initDevData() to run before continuing!!!!!!
      console.log("start initDevData2");
      const activeDevData = await initDevData();
      console.log("devData:", devData.data);
      console.log("activeDevData:", activeDevData);
      console.log("end initDevData2");
      //
    }
    console.log("end");
  }
  async function syncUser() {
    // return new Promise((res, rej) => {
    var message = "Enter Github ID to Initialize";
    var result = prompt(message);
    const testvar = await API.getsync(result);
    // return res(true);
    // });
  }

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

  if (devData) {
    // if (devData.password) {
    var homeComp = Home;
    // } else {
    //   var homeComp = Signin;
    // }
    returnValue = (
      <React.Fragment>
        <Layout>
          <Router>
            <NavigationBar />
            <Switch>
              <DevDataContext.Provider value={{ devData, setDevData }}>
                <Route exact path="/" component={homeComp} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Developer" component={Developer} />
                <Route exact path="/Signin" component={Signin} />
              </DevDataContext.Provider>
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  } else {
    var returnValue = "";
  }
  return returnValue;
};

export default App;
