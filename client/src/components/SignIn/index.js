import React, { Component } from "react";
// import "../pages/Signin/Signin.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class SigninComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: null,
      githubID: null,
      formErrors: {
        password: "",
        githubID: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Password: ${this.state.password}
        Github ID: ${this.state.githubID}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "githubID":
        formErrors.githubID =
          value.length < 3 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit} noValidate>
           
           
            {/* Git hub */}
            <div className="githubID">
              <label htmlFor="githubID">Github ID</label>
              <input
                className={formErrors.githubID.length > 0 ? "error" : null}
                placeholder="Github ID"
                type="text"
                name="githubID"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.githubID.length > 0 && (
                <span className="errorMessage">{formErrors.githubID}</span>
              )}
            </div>
            {/* Git hub */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninComp;