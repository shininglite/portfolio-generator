import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer";
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
import { NavigationBar } from "./components/HomeNav";
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

  // On load, get the active user, set "Setup" variables, and start the synch process from github.
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

  async function syncUser() {
    // return new Promise((res, rej) => {
    var message = "Enter Github ID to Initialize";
    var result = prompt(message);
    const testvar = await API.getsync(result);
  }

  return (
    <div>
      {setup.isLoadedFlag ? (
        <React.Fragment>
          <Layout>
            <Router>
              <NavigationBar />
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
//
// async function initialization() {
//   //
//   console.log("start initDevData1");

//   API.getActiveDevData().then((activeDevData) => {
//     console.log("got it");
//     if (activeDevData.data) {
//       setDevData(activeDevData.data);
//       res(activeDevData.data);
//     } else {
//       res(activeDevData.data);
//     }
//   });
// });
//   console.log("devData", devData); // <-- This is null.
//   console.log("activeDevData", activeDevData); // <-- This is populated.
//   console.log("end initDevData1");
//   //
//   if (!activeDevData) {
//     //
//     console.log("start syncUser");
//     const userLoaded = await syncUser();
//     console.log("end syncUser");
//     //  KIERAN at this point, I need initDevData() to run before continuing!!!!!!
//     console.log("start initDevData2");
//     const activeDevData = await initDevData();
//     console.log("devData:", devData.data);
//     console.log("activeDevData:", activeDevData);
//     console.log("end initDevData2");
//     //
//   }
//   console.log("end");
// }
// async function syncUser() {
//   // return new Promise((res, rej) => {
//   var message = "Enter Github ID to Initialize";
//   var result = prompt(message);
//   const testvar = await API.getsync(result);
//   // return res(true);
//   // });
// }

// async function initDevData() {
//   return new Promise((res, rej) => {
//     API.getActiveDevData().then((activeDevData) => {
//       console.log("got it");
//       if (activeDevData.data) {
//         setDevData(activeDevData.data);
//         res(activeDevData.data);
//       } else {
//         res(activeDevData.data);
//       }
//     });
//   });
// }
