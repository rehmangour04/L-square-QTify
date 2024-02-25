/** @format */

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTabs.module.css";

const FilterTabs = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return <div>{value === index && <>{children}</>}</div>;
  }

  const filteredData = (index) => {
    if (index === 0) {
      return data;
    } else {
      const tabLabel = ["Rock", "Pop", "Jazz", "Blues"][index - 1];
      return data.filter((item) => item.genre.key === tabLabel.toLowerCase());
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" className={styles.tab} />
            <Tab label="Rock " className={styles.tab} />
            <Tab label="Pop" className={styles.tab} />
            <Tab label="Jazz " className={styles.tab} />
            <Tab label="Blues" className={styles.tab} />
          </Tabs>
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={styles.filterSectionWrapper}>
          <Section data={filteredData(0)} type="songs" header="all" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.filterSectionWrapper}>
          <Section data={filteredData(1)} type="songs" header="filterAll" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.filterSectionWrapper}>
          <Section data={filteredData(2)} type="songs" header="filterAll" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={styles.filterSectionWrapper}>
          <Section data={filteredData(3)} type="songs" header="filterAll" />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={styles.filterSectionWrapper}>
          <Section data={filteredData(4)} type="songs" header="filterAll" />
        </div>
      </TabPanel>
    </div>
  );
};

export default FilterTabs;
