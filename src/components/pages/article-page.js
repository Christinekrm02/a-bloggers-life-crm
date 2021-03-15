import React from "react";

import PageTitle from "./page-title";
import articles from "./article-content";
import ArticlesList from "../articles-list";
//import Header from "../header-nav";

export default function ArticlePage({ match }) {
  //match contains params property, which gives access to slug
  //pull param (slug) from match property
  const slug = match.params.slug;

  //pull matching article from list of articles
  //param must match article name
  const article = articles.find(article => article.name === slug);

  //GET OTHER ARTICLES
  const relatedArticles = articles.filter(article => article.name !== slug);
  return (
    <div>
      {/* <Header /> */}

      <h1> {article.title} </h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      {/*related articles */}
      <PageTitle className="related-articles" title="Related Articles" />
      <ArticlesList articles={relatedArticles} />
    </div>
  );
}
