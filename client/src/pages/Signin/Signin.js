import React from "react";
import SigninComp from "../../components/SignIn"
import CreateAccountComp from "../../components/CreateAccount"
import "./Signin.css";

function SignIn() {
  return (
    <div>
    <SigninComp></SigninComp>
    <CreateAccountComp></CreateAccountComp>
    </div>

  )
}
export default SignIn;