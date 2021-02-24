import React, { Component } from "react";
import PageTitle from "./page-title";

class ArticlePage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <PageTitle className="article-page" title="Article Page" />
      </div>
    );
  }
}

export default ArticlePage;
