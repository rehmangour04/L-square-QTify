/** @format */

import React from "react";
import styles from "./feedback.module.css";

const FeedbackButton = ({ text }) => {
  return <button className={styles.feedbackButton}>{text}</button>;
};

export default FeedbackButton;