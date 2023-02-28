import React from "react";

function Search({search, setSearch, handleSubmit}) {

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;