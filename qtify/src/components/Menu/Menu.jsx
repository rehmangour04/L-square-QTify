/** @format */

import React from "react";
import styles from "./Menu.module.css";
import SongItems from "../SongCollection/SongItems";

const Menu = ({ albums }) => {
  console.log("album", albums);
  return (
    <>
      <div className={styles.wrapper}>
        {albums?.length
          ? albums.map((item) => (
              <div className={styles.menuItemWrapper} key={item.id}>
                <SongItems
                  image={item.image}
                  albumName={item.title}
                  follows={item.follows}
                  key={item.id}
                />
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Menu;
