import React, { useState } from "react";
import styles from "./sofa.module.css";
const SofaComponent = () => {
  const [color, setColor] = useState("orange");

  return (
    <div className={styles.sofa_main_div}>
      <div className={styles.sofa_and_buttons_div}>
        <img
          className={styles.sofa_main_img}
          src={
            color === "orange"
              ? "./sofa/orangeSofa.png"
              : color === "blue"
              ? "./sofa/blueSofa.png"
              : "./sofa/greenSofa.png"
          }
        />
        <div className={styles.divided_circles_div}>
          <button
            onClick={() => setColor("orange")}
            className={styles.divided_circle1}
          ></button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className={styles.divided_circle2}
          ></button>
          <button
            onClick={() => setColor("green")}
            className={styles.divided_circle3}
          ></button>
        </div>
      </div>
      <div className={styles.zoom_sofa_div}>
        <img
          src={
            color === "orange"
              ? "./sofa/orangeSofa.png"
              : color === "blue"
              ? "./sofa/blueSofa.png"
              : "./sofa/greenSofa.png"
          }
          className={styles.zoom_sofa_img}
        />
      </div>
    </div>
  );
};

export default SofaComponent;
