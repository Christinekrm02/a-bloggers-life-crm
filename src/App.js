import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./navbar";
import ArticlesList from "./components/pages/articles-list";
import AboutPage from "./components/pages/about-page";
import HomePage from "./components/pages/homepage";
import ArticlePage from "./components/pages/article-page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route
            path="/articles/articles-list"
            exact
            component={ArticlesList}
          />
          <Route path="/articles/article-page" exact component={ArticlePage} />
        </div>
      </Router>
    );
  }
}

export default App;