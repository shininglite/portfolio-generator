import React, { Component } from "react";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

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

class CreateAccountComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      githubID: null,
      loaded: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        githubID: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("HMMMM");
    this.props.handleInputChange();
    API.getsync(this.state.githubID);
    this.state.loaded = true;
    // console.log(`
    //   --SUBMITTING--
    //   First Name: ${this.state.firstName}
    //   Last Name: ${this.state.lastName}
    //   Email: ${this.state.email}
    //   Password: ${this.state.password}
    //   Github ID: ${this.state.githubID}
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
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

    this.setState({ formErrors, [name]: value }, () => null);
  };

  render() {
    const { formErrors } = this.state;
    // console.log("Try", this.state.loaded);
    // if (this.state.loaded) {
    //   return <Redirect to={"/Home"} />;
    // }
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
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
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAccountComp;
