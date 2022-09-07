import React from "react";
import RecommendTag from "./RecommendTag";
import SearchContents from "./SearchContents";
import SearchHeader from "./SearchHeader";

export default function Search() {
  return (
    <div>
      <SearchHeader />
      <SearchContents />
      <RecommendTag />
    </div>
  );
}
