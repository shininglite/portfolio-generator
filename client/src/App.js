import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer";
import DevHome from "./pages/DevHome";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin/Signin";
import API from "./utils/API";
import DevDataContext from "./utils/DevDataContext";
import SetupContext from "./utils/SetupContext";

// Here is another way to set up imports.  I only did this on the about page to show how. Check out how the About pages exports.  You will need the curly brackets when importing.
import { Layout } from "./components/Layout";
import { DevNavigationBar } from "./components/DevHomeNav";
//
// devData - This is in the format of how we are reading the database.
const App = () => {
  const [devData, setDevData] = useState({
    repositories: [],
    developerLoginName: "",
    developerGithubID: "",
    fname: "",
    lname: "",
    email: "",
  });
  const devDataProvider = useMemo(() => ({ devData, setDevData }), [
    devData,
    setDevData,
  ]);

  // setup - This tracks our initialization process.
  const [setup, setSetup] = useState({
    isLoadedFlag: false,
    initialized: false,
  });
  const setupProvider = useMemo(() => ({ setup, setSetup }), [setup, setSetup]);

  // On load find active user
  useEffect(() => {
    console.log("start");
    API.getActiveDevData().then((activeDevData) => {
      if (activeDevData.data) {
        setDevData(activeDevData.data);
        setSetup({
          isLoadedFlag: true,
          initialized: true,
        });
        API.getsync();
      } else {
        setSetup({
          isLoadedFlag: true,
          initialized: false,
        });
      }
    });
    console.log("end");
  }, []);
  console.log("setup.initialized", setup.initialized);
  console.log("setup.isLoadedFlag", setup.isLoadedFlag);
  return (
    <div>
      {setup.isLoadedFlag ? (
        <React.Fragment>
          <Layout>
            <Router>
              <Switch>
                <DevDataContext.Provider value={devDataProvider}>
                  <SetupContext.Provider value={setupProvider}>
                    {setup.initialized ? (
                      <Route exact path="/" component={Home} />
                    ) : (
                      <Route exact path="/" component={Signin} />
                    )}
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/Developer" component={Developer} />
                    <Route exact path="/Signin" component={Signin} />
                    <Route exact path="/DevHome" component={DevHome} />
                  </SetupContext.Provider>
                </DevDataContext.Provider>
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default App;
