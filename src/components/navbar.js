import React, { Component } from "react";
//import "../styles/navbar.css";
//import { Link } from "react-router-dom";
//import Nav from "react-bootstrap/Nav";



class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Link className="navbar_navlink active" to="/">
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navbar_navlink" to="/about">
                About
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navbar_navlink" to="/articles-list">
                Articles
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavBar;
