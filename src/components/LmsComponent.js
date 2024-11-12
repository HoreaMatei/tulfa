import React from "react";
import styles from "./lms.module.css";

const LmsComponent = () => {
  return (
    <div className={styles.lms}>
      <div className={styles.lmsMain}>
        <div className={styles.l}>
          <p>L</p>
          <img className={styles.imgL} src="./lms.png" />
        </div>
        <div className={styles.m}>
          <p>M</p>
          <img className={styles.imgM} src="./lms.png" />
        </div>
        <div className={styles.s}>
          <p>S</p>
          <img className={styles.imgS} src="./lms.png" />
        </div>
      </div>
      <p> Lorem Ipsum Dolor Sit Amet</p>
    </div>
  );
};

export default LmsComponent;
