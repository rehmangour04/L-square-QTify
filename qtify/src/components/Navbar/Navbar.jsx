/** @format */

import React from "react";
import Logo from "../Logo/Logo";
import styles from "./navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FeedbackButton from "../Feedback/FeedbackButton";
const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <SearchBar />
      <FeedbackButton />
    </nav>
  );
};

export default Navbar;
