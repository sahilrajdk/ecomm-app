import React from "react";

import "./signin-signout.styles.scss";
import Signin from "./../../components/signin/signin.component";
import SignUp from "./../../components/singnup/signup.component";

const SigninSignoutPage = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <SignUp />
  </div>
);

export default SigninSignoutPage;
