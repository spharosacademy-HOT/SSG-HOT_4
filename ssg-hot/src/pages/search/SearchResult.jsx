import React from "react";
import SearchList from "./searchResult/SearchList";
import SearchResultHeader from "./searchResult/SearchResultHeader";

export default function SearchResult() {
  return (
    <div>
      <SearchResultHeader />
      <SearchList />
    </div>
  );
}
