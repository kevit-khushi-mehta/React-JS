import React from "react";
import "./SearchBar.css";

const SearchBar = ({query,onSearch }) => {

  return (
    <input
      type="text" 
      placeholder="Search users..."
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
