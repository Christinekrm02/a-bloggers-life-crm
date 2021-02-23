import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/articles/articles-list">Articles</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
