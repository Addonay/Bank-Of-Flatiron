import React from "react";
import "../stylesheets/App.css";

const Search = (props) => {

  let handleChange = (evt) => {
    props.searchFun(evt.target.value)
  }

  return (
    <div className="search input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchValue}
        onChange={handleChange}
      />
      <i className="search-icon">
        <img src="public/icons8-search-26.png" alt="Search Icon" />
      </i>
    </div>
  );
};

export default Search;
