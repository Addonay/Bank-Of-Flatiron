import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/App.css";

const Search = (props) => {
  // Event handler to update the search text in the parent component
  let handleChange = (evt) => {
    // Call the 'searchFun' prop with the updated search text
    props.searchFun(evt.target.value);
  };

  return (
    <div className="search input">
      {/* Input field for search */}
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchValue}
        onChange={handleChange}
      />
      {/* Search icon */}
      <i className="search-icon">
        <img src="public/icons8-search-26.png" alt="Search Icon" />
      </i>
    </div>
  );
};

// Prop types for the 'searchValue' and 'searchFun' props
Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchFun: PropTypes.func.isRequired,
};

export default Search;
