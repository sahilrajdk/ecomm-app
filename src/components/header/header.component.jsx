import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/crown.svg";
import "./header.style.scss";
import { connect } from "react-redux";
import { auth } from "./../firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <p className="display-name">
        {" "}
        {currentUser ? ` Welcome,${currentUser.displayName} ` : ""}
      </p>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/login">SIGN IN</Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
