import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FootballList from "./FootballList";
import BasketballList from "./BasketballList";

class Navs extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-sm bg-light justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Football{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/basketball/">
                  Basketball
                </Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={FootballList} />
          <Route path="/basketball/" component={BasketballList} />
        </div>
      </Router>
    );
  }
}

export default Navs;
