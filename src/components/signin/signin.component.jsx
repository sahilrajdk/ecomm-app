import React from "react";

import "./signin.styles.scss";

import FormInput from "./../form-input/form-input.component";
class Signin extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: [value] });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account ?</h2>
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email Address"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Signin;
