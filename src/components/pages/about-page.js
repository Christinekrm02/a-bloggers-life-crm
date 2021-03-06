import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import "../../styles/about.css";

import ProjectCard from "../cards/project-card.js";

import Header from "../header-nav";

class AboutPage extends Component {
  render() {
    const otherStyles = {
      color: "#8A2BE2",
      fontSize: "22px",
      padding: "10px",
    };
    return (
      <>
        <div className="about-page-intro">
          <CssBaseline />
          <Header />
          <div className="about-section">
            <h1>What is Dev.Admin?</h1>
            <p>
              Dev.Admin serves to educate inspiring web developers by creating
              fullstack web projects with step by step instructions.
            </p>
          </div>
          <div className="featured-projects">
            <h3 style={otherStyles}>Check out some of my other projects.</h3>
            <ProjectCard />
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
