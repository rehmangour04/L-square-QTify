/** @format */
import { StyledEngineProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { fetchTopAlbums } from "./api/api";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroPage from "./components/Hero/HeroPage.jsx";
import AlbumCard from "./components/Card/AlbumCard.jsx";
import Section from "./components/Section/Section.jsx";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log("data", data);
    setTopAlbumData(data);
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HeroPage />
        <Section title="Top Albums" data={topAlbumData} type="album" />
      </StyledEngineProvider>
    </>
  );
}

export default App;
