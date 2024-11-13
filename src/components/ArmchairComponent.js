import React, { useState } from "react";
import styles from "./armchair.module.css";

const ArmchairComponent = () => {
  const [chairColor, setChairColor] = useState("blue");
  return (
    <div className={styles.armchair_main}>
      <div className={styles.normal_img_div}>
        <img
          className={styles.normal_img}
          src={
            chairColor === "blue"
              ? "./armchair/blueChair.png"
              : chairColor === "grey"
              ? "./armchair/greyChair.png"
              : "./armchair/purpleChair.png"
          }
        />
      </div>
      <div className={styles.zomm_div}>
        <img
          className={styles.zoom_img}
          src={
            chairColor === "blue"
              ? "./armchair/blueChair.png"
              : chairColor === "grey"
              ? "./armchair/greyChair.png"
              : "./armchair/purpleChair.png"
          }
        />

        <div className={styles.picks_div}>
          <div className={styles.li_div} onClick={() => setChairColor("blue")}>
            <p>Prints</p>
            <img className={styles.pick_img} src="./armchair/blueChair.png" />
          </div>
          <div className={styles.li_div} onClick={() => setChairColor("grey")}>
            <p>Leathers</p>
            <img className={styles.pick_img} src="./armchair/greyChair.png" />
          </div>
          <div
            className={styles.li_div}
            onClick={() => setChairColor("purple")}
          >
            <p>Embroidery</p>
            <img className={styles.pick_img} src="./armchair/purpleChair.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArmchairComponent;
