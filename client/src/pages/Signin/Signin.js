import React, { useContext, useState } from "react";
import SigninComp from "../../components/SignIncomp";
import CreateAccountComp from "../../components/CreateAccountcomp";
import SetupContext from "../../utils/SetupContext";
import "./Signin.css";
import DevDataContext from "../../utils/DevDataContext";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function SignIn() {
  const { devData, setDevData } = useContext(DevDataContext);
  const { setup, setSetup } = useContext(SetupContext);
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false,
  });

  const handleInputChange = (e) => {
    setLoggedIn({ loggedIn: true });
  };

  if (loggedIn.loggedIn) {
    return <Redirect to={"/DevHome"} />;
  }
  if (setup.initialized) {
    return (
      <div>
        <SigninComp handleInputChange={handleInputChange}></SigninComp>
      </div>
    );
  } else {
    return (
      <div>
        <CreateAccountComp
          handleInputChange={handleInputChange}
        ></CreateAccountComp>
      </div>
    );
  }
}

export default SignIn;
