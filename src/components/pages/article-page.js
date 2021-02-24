import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import PageTitle from "./page-title";

class ArticlePage extends Component {
  /* constructor(match, ...props) {
    super(...props); */

  static propTypes = {
    name: PropTypes.object.isRequired,
    /* location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired, 
  }; */
  };
  render() {
    let { name } = this.props;
    return (
      <div>
        <h1>You are now at {name} page!</h1>
        <PageTitle className="article-page" title="Article Page" />
      </div>
    );
  }
}

export default withRouter(ArticlePage);
