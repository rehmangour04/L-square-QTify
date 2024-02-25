/** @format */

import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./album.module.css";
const AlbumCard = ({ data, type }) => {
  const renderAlbumCard = () => (
    <Tooltip
      title={`${data.songs.length} songs`}
      className={styles.tooltip}
      placement="top"
      arrow
    >
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={data.image} alt="album" />
          <div className={styles.banner}>
            <Chip
              label={`${data.follows} Follows`}
              className={styles.chip}
              size="small"
            ></Chip>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <p>{data.title}</p>
        </div>
      </div>
    </Tooltip>
  );

  const renderSongCard = () => (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={data.image} alt="song" loading="lazy" />
        <div className={styles.banner}>
          <div className={styles.pill}>
            <p>{data.likes} Likes</p>
          </div>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{data.title}</p>
      </div>
    </div>
  );

  return type === "album" ? (
    renderAlbumCard()
  ) : type === "songs" ? (
    renderSongCard()
  ) : (
    <></>
  );
};
export default AlbumCard;
