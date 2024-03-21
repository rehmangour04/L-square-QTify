/** @format */

import React from "react";
import Logo from "../Logo/Logo";
import styles from "./navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FeedbackButton from "../Feedback/FeedbackButton";
const Navbar = ({ data }) => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <SearchBar placeholder="Search a album of your choice" data={data} />
      <FeedbackButton text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
