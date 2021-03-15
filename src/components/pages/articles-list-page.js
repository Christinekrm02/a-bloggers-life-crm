import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "./page-title";
//import Header from "../header-nav";
import articles from "./article-content";
import ArticlesList from "../articles-list";

export default function ArticlesListPage() {
  return (
    <div>
      {/*<Header />; */}
      <ArticlesList articles={articles} />
    </div>
  );
}
