import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//import NavBar from "./navbar";
import ArticlesList from "./components/pages/articles-list";
import ArticlePage from "./components/pages/article-page";
import AboutPage from "./components/pages/about-page";
import HomePage from "./components/pages/homepage";
import Error404 from "./components/pages/error-404";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* <NavBar /> */}
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/home/:slug" exact component={HomePage} /> */}
            <Route path="/about" exact component={AboutPage} />
            <Route path="/articles-list" exact component={ArticlesList} />
            <Route path="/article/:slug" exact component={ArticlePage} />
            <Route exact component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
