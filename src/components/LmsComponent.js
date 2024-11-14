import React from "react";
import styles from "./lms.module.css";

const LmsComponent = () => {
  return (
    <div className={styles.lms}>
      <div className={styles.lmsMain}>
        <div className={styles.l}>
          <p className={styles.p1}>L</p>
          <img className={styles.imgL} src="./lms.png" />
        </div>
        <div className={styles.m}>
          <p className={styles.p2}>M</p>
          <img className={styles.imgM} src="./lms.png" />
        </div>
        <div className={styles.s}>
          <p className={styles.p3}>S</p>
          <img className={styles.imgS} src="./lms.png" />
        </div>
      </div>
      <p className={styles.main_text}> Lorem Ipsum Dolor Sit Amet</p>
    </div>
  );
};

export default LmsComponent;
