/** @format */

import React from "react";
import styles from "./feedback.module.css";

const FeedbackButton = ({ btnText, onClickHandler }) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {btnText}
    </button>
  );
};

export default FeedbackButton;
