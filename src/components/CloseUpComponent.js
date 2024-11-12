import React from "react";
import styles from "./closeupComp.module.css";
import { useState } from "react";
const CloseUpComponent = ({ opened, setOpened }) => {
  return (
    <div className={opened ? styles.closeupContainer : styles.displayNone}>
      <button
        className={styles.closeBtn}
        onClick={() => {
          setOpened(false);
        }}
      >
        <img src="closeUpShots/close.png" className={styles.close} />
      </button>
      <img src="closeUpShots/1.jpg" className={styles.img1} />

      <div className={styles.h2Container}>
        <h2>
          Lorem ipsum dolor sit amet consectetur. Morbi id eget elementum
          ornare.{" "}
        </h2>
      </div>
      <img src="closeUpShots/2.jpg" className={styles.img2} />
      <img src="closeUpShots/3.jpg" className={styles.img3} />
      <img src="closeUpShots/4.jpg" className={styles.img4} />
      <img src="closeUpShots/5.jpg" className={styles.img5} />
      <img src="closeUpShots/6.jpg" className={styles.img6} />
      <img src="closeUpShots/7.jpg" className={styles.img7} />
      <img src="closeUpShots/8.jpg" className={styles.img8} />
      <img src="closeUpShots/9.jpg" className={styles.img9} />
    </div>
  );
};

export default CloseUpComponent;
