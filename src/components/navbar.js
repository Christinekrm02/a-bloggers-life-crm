import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <Link className="navbar_navlink" to="/">
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
