/** @format */

import React from "react";
import styles from "./search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const SearchBar = (props) => {
  const { placeholder } = props;

  return (
    <>
      <form className={styles.wrapper}>
        <input className={styles.search} placeholder={placeholder}></input>
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
