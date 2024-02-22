/** @format */
import { StyledEngineProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import styles from "./App.module.css";

import { fetchTopAlbums, fetchNewAlbums } from "./api/api";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroPage from "./components/Hero/HeroPage.jsx";

import Section from "./components/Section/Section.jsx";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumData(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HeroPage />
        <div className={styles.sectionWrapper}>
          <Section title="Top Albums" data={topAlbumData} type="album" />
        </div>
        <Section title="New Albums" data={newAlbumData} type="album" />
      </StyledEngineProvider>
    </>
  );
}

export default App;
