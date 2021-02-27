import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core";
import "../../styles/about.css";
import movieapp from "../../assets/movieapp.jpg";

import Header from "../header-nav";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-wrapper">
        <CssBaseline />
        <Header />
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
        <h2 className="about-heading">Check Out My Other Projects</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={movieapp} />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
