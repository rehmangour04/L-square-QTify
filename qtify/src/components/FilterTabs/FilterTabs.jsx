/** @format */

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTabs.module.css";
import { allSongsTabs } from "../../TabSongs/data";

const FilterTabs = ({ data, loadingState }) => {
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
            {allSongsTabs.map((each) => (
              <Tab label={each} key={each} className={styles.tab} />
            ))}
          </Tabs>
        </Box>
        {allSongsTabs.map((_, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div className={styles.filterSectionWrapper}>
              <Section
                data={filteredData(index)}
                type="songs"
                header={index ? "filterAll" : "all"}
                loadingState={loadingState}
              />
            </div>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

export default FilterTabs;
