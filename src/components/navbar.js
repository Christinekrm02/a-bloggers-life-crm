import React, { Component } from "react";
//import "../styles/navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <Link className="navbar_navlink active" to="/">
                Home
              </Link>
              <Link className="navbar_navlink" to="/about">
                About
              </Link>
              <Link className="navbar_navlink" to="/articles/articles-list">
                Articles
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
