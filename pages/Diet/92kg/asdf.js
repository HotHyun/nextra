import React from "react";

const Introduction = () => {
  const docPageKey = "doc-page-visited";
  const hasVisitedDocPage = localStorage.getItem(docPageKey) === "true";

  if (!hasVisitedDocPage) {
    const scoreKey = `user-score`;
    let score = parseInt(localStorage.getItem(scoreKey) || "0", 10);
    score += 10;
    localStorage.setItem(scoreKey, score.toString());
    localStorage.setItem(docPageKey, "true");
  }

  return <div>Introduction</div>;
};
