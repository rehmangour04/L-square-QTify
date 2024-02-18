/** @format */

import React, { useMemo } from "react";
import styles from "./search.module.css";
import SearchIcon from "../../assets/SearchIcon.svg";

const SearchBar = () => {
  const handleSearchIconClick = useMemo(() => {
    return () => {
      document.getElementById("searchInput").focus();
    };
  }, []);

  return (
    <div className={styles.searchContainer}>
      <input
        id="searchInput"
        type="text"
        placeholder="Search an album of your choice"
        className={styles.searchInput}
      />
      <button className={styles.searchButton} onClick={handleSearchIconClick}>
        <img src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
