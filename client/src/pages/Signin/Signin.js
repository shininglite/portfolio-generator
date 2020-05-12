import React from "react";
import SigninComp from "../../components/SignIn"
import CreateAccountComp from "../../components/CreateAccount"
import "./Signin.css";



function SignIn() {
  // return (
  //   <div>
  //   <SigninComp></SigninComp>
  //   <CreateAccountComp></CreateAccountComp>
  //   </div>

  // )
  let isLoggedIn = true;

    if (isLoggedIn) {
      return <div><SigninComp isLoggedIn={true}></SigninComp></div>
    }
    else {
      return <div><CreateAccountComp></CreateAccountComp></div>
    }
  }

  // return (
  //   <div>
  //     {isLoggedIn
  //       ? <SigninComp></SigninComp>
  //       : <CreateAccountComp></CreateAccountComp>
  //     }
  //   </div>
  // )
//}
export default SignIn;