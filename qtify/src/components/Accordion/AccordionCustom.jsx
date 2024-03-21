/** @format */

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactComponent as UpArrowIcon } from "../../assets/upArrow.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/downArrow.svg";
import styles from "./CustomAccordion.module.css";

const accordionData = [
  {
    id: "panel1",
    question: "Is QTify free to use?",
    answer: "Yes! It is 100% free, and it has 0% ads!",
  },
  {
    id: "panel2",
    question: "Can I download and listen to songs offline?",
    answer:
      "Sorry, unfortunately we don't provide service to download any songs.",
  },
];

const AccordionCustom = () => {
  const [expanded, setExpanded] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className={styles.accordionContainer}>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          className={styles.wrapper}
        >
          <AccordionSummary
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
            className={styles.accordionHeader}
          >
            <Typography className={styles.accordionText}>
              {item.question}
            </Typography>
            <div className={styles.arrow}>
              {expanded === item.id ? <UpArrowIcon /> : <DownArrowIcon />}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionDescription}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionCustom;
