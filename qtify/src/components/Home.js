/** @format */

import React, { useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from "../api/api.js";
import { useState } from "react";
import styles from "./Home.module.css"; // Import styles from the new module
import AccordionCustom from "./Accordion/AccordionCustom";

import Navbar from "./Navbar/Navbar.jsx";
import HeroPage from "./Hero/HeroPage.jsx";
import FilterTabs from "./FilterTabs/FilterTabs.jsx";
import Section from "./Section/Section.jsx";

function Home() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songs, setSongs] = useState([]);

  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumData(data);
  };

  const generateAllSongsData = async () => {
    const data = await fetchAllSongs();
    setSongs(data);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroPage />
      <div className={styles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbumData} type="album" />
      </div>
      <div className={styles.sectionWrapper}>
        <Section title="New Albums" data={newAlbumData} type="album" />
      </div>

      <hr className={styles.songLine}></hr>

      <div>
        <h3 className={styles.tabsTitle}>Songs</h3>
      </div>

      <FilterTabs data={songs} />
      <hr></hr>
      <div className={styles.customAccordionWrapper}>
        <h1 className={styles.accordionHeader}>FAQs</h1>
        <AccordionCustom />
      </div>
    </>
  );
}

export default Home;
