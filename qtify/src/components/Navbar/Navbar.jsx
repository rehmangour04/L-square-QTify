/** @format */

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FeedbackButton from "../Feedback/FeedbackButton";
import FeedBackForm from "../FeedBackForm/FeedBackForm";

const Navbar = ({ data }) => {
  const [feedback, setFeedBack] = useState(false);
  const _handleClick = () => {
    setFeedBack(!feedback);
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <Logo />
        <SearchBar placeholder="Search a album of your choice" data={data} />
        <FeedbackButton btnText="Give Feedback" onClickHandler={_handleClick} />
      </nav>

      {feedback ? <FeedBackForm open={feedback} /> : <></>}
    </>
  );
};

export default Navbar;
