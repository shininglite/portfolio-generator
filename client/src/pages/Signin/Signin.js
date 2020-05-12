import React from "react";
import SigninComp from "../../components/SignIncomp"
import CreateAccountComp from "../../components/CreateAccountcomp"
import "./Signin.css";



function SignIn() {
  // return (
  //   <div>
  //   <SigninComp></SigninComp>
  //   <CreateAccountComp></CreateAccountComp>
  //   </div>

  // )
  let isLoggedIn = false;

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