import React, { Component } from "react";
import "../styles/homepage.css";
import PageTitle from "./page-title";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello! Welcome to my Blog</h1>
        <PageTitle className="home-page" title="Home Page" />
      </div>
    );
  }
}

export default HomePage;
