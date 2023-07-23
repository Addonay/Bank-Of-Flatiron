import React from "react";
import PropTypes from "prop-types";
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

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchFun: PropTypes.func.isRequired,
};

export default Search;
