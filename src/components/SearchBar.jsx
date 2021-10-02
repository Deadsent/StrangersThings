import React, { useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, allPosts, setAllPosts }) => {
  useEffect(() => {
    const filtered = allPosts.filter((post) => {
      if(post.title.includes(searchTerm)){
      return true} else {
        return false
      }

    });
    setAllPosts(filtered);
  }, [searchTerm]);

  return (
    <div className="searchBar">
      <form>
        <fieldset>
          <label id="filter">Filter</label>
          <input
            id="filterInput"
            type="text"
            placeholder="filter"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default SearchBar;
