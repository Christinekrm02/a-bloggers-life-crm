import React, { Component } from "react";

import PageTitle from "./page-title";
import Header from "../header-nav";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <PageTitle className="about-page" title="About" />;
        <Header />
      </div>
    );
  }
}

export default AboutPage;
