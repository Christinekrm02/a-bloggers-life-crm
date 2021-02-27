import React, { Component } from "react";

import PageTitle from "./page-title";


class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log("Object": ", this.props.match.params.slug);
    return (
      <div>
        <PageTitle className="article-page" title="Article Page" />
        <h1> {this.props.match.params.slug} </h1>
      </div>
    );
  }
}

export default ArticlePage;
