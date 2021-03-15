import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map((article, key) => (
        <Link className="articles-list-item" to={`/article/${article.name}`}>
          <h3 key={key}>{article.title}</h3>
          <p>{article.content[0].substring(0, 90)}...</p>
        </Link>
      ))}
    </div>
  );
}
