import React, { Component } from "react";

import PageTitle from "./page-title";

class ArticlesList extends Component {
  render() {
    return (
      <div>
        <PageTitle className="articles-list__artciles" title="Articles" />
      </div>
    );
  }
}

export default ArticlesList;
