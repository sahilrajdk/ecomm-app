import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shoppage/shop.component";
import SigninSignoutPage from "./pages/signin-signoutpage/signin-signoutpage.component";

import { auth } from "./components/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeAuthState = null;

  componentDidMount() {
    this.unSubscribeAuthState = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuthState();
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          displayName={this.state.displayName}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={SigninSignoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
