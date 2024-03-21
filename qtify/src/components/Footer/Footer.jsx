/** @format */

import React from "react";
import "./footer.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FastForwardIcon from "@mui/icons-material/FastForward";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-song">
        <img
          src="../../assets/srksong.jpg"
          alt="Song Playing"
          width="75"
          height="80"
        />
      </div>
      <div>
        <h3 className="song-title">Chaleya</h3>
        <p className="album-title">Jawan</p>
      </div>

      <div className="player-wrapper">
        <audio src=""></audio>
        <div>
          <SkipPreviousIcon />
          <FastRewindIcon />
          <PlayCircleIcon />
          <FastForwardIcon />
          <SkipNextIcon />
        </div>
        <div className="progress-bar">
          <p>00:24</p>
          <Box sx={{ width: 500 }}>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Box>
          <p>1:06</p>
        </div>
        <div className="volume-layout">
          <VolumeUpIcon />
          <Box sx={{ width: 500 }}>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Footer;
