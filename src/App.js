import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shoppage/shop.component";
import SigninSignoutPage from "./pages/signin-signoutpage/signin-signoutpage.component";

import { createUserProfileDocument } from "./components/firebase.utils";
import { auth } from "./components/firebase.utils";
import { setCurrentUser } from "./redux/actions/userActions";

class App extends React.Component {
  unSubscribeAuthState = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeAuthState = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuthState();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninSignoutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
