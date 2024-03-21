/** @format */

import React, { useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from "../api/api.js";
import { useState } from "react";
import styles from "./Home.module.css"; // Import styles from the new module
import AccordionCustom from "./Accordion/AccordionCustom";
// import SearchBar from "./components/SearchBar/SearchBar";

import Navbar from "./Navbar/Navbar.jsx";
import HeroPage from "./Hero/HeroPage.jsx";
import FilterTabs from "./FilterTabs/FilterTabs.jsx";
import Section from "./Section/Section.jsx";
// import Footer from "./Footer/Footer.jsx";

function Home() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songs, setSongs] = useState([]);

  const [loadingState, setLoadingState] = useState({
    topAlbum: true,
    newAlbum: true,
    allSongs: true,
  });

  const manageLoadingState = (key = "", value = false) => {
    setLoadingState((prevState) => ({ ...prevState, [key]: value }));
  };
  const generateTopAlbumData = async () => {
    try {
      manageLoadingState("topAlbum", true);
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
      manageLoadingState("topAlbum", false);
    } catch (error) {
      manageLoadingState("topAlbum", false);
      console.log(error);
    }
  };

  const generateNewAlbumData = async () => {
    try {
      manageLoadingState("newAlbum", true);
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
      manageLoadingState("newAlbum", false);
    } catch (error) {
      manageLoadingState("newAlbum", false);
      console.log(error);
    }
  };

  const generateAllSongsData = async () => {
    try {
      manageLoadingState("allSongs", true);
      const data = await fetchAllSongs();
      setSongs(data);
      manageLoadingState("allSongs", false);
    } catch (error) {
      manageLoadingState("allSongs", false);
      console.log(error);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  return (
    <>
      <Navbar data={topAlbumData} />
      <HeroPage />
      <div className={styles.sectionWrapper}>
        <Section
          title="Top Albums"
          data={topAlbumData}
          type="album"
          loadingState={loadingState.topAlbum}
        />
        <Section
          title="New Albums"
          data={newAlbumData}
          type="album"
          loadingState={loadingState.newAlbum}
        />
      </div>
      <hr className={styles.line}></hr>
      <div>
        <h3 className={styles.tabsTitle}>Songs</h3>
      </div>
      <FilterTabs data={songs} loadingState={loadingState.allSongs} />
      <hr className={styles.line}></hr>

      <div className={styles.customAccordionWrapper}>
        <h1 className={styles.accordionHeader}>FAQs</h1>
        <AccordionCustom />
      </div>
      <hr className={styles.songLine}></hr>
    </>
  );
}

export default Home;
