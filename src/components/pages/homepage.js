import React, { Component } from "react";
import "../../styles/homepage.css";
import PageTitle from "./page-title";

class HomePage extends Component {
  render() {
    // console.log(this.props.match.params.slug);
    return (
      <div className="homepage-wrapper">
        <PageTitle className="home-page" title="Home Page" />

      </div>
    );
  }
}

export default HomePage;
