/** @format */

import React from "react";
import styles from "./search.module.css";
import SearchIcon from "../../assets/SearchIcon.svg";
const SearchBar = () => {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search a album of your choice"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
