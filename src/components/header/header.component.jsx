import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/crown.svg";
import "./header.style.scss";

import { auth } from "./../firebase.utils";

const Header = props => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <p className="display-name">
        {" "}
        {props.currentUser ? ` Welcome,${props.currentUser.displayName} ` : ""}
      </p>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {props.currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/login">SIGN IN</Link>
      )}
    </div>
  </div>
);

export default Header;
