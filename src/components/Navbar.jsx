import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../images/home.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top">
        <div className="navbar-brand mx-auto">
          <Link to="/">
            <img src={homeIcon} alt="" />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
