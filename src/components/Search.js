import React from "react";

function Search({ query, onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value); // Update the search query in App.js
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={query}
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
