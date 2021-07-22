import React from "react";
import "./App.css";
import landing from "./pages/landing";
import { WelcomePage } from "./pages/WelcomePage";
import { AddItemPage } from "./pages/AddItemPage";
import { SignupPage } from "./pages/SignupPage";
import { CommunityPage } from "./pages/CommunityPage";
import { BorrowItemPage } from "./pages/BorrowItemPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import animationData from "./lottie/lot.json";

export class App extends React.Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <div className="topDesign"></div>
          <div>
            <Switch>
              <Route component={landing} exact path="/" />
              <Route component={SignupPage} exact path="/SignupPage" />
              <Route component={WelcomePage} path="/WelcomePage" />
              <Route component={AddItemPage} path="/AddItem" />
              <Route component={CommunityPage} path="/CommunityPage" />
              <Route component={BorrowItemPage} path="/BorrowItemPage" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
