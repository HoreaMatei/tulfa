import { useLayoutEffect, useRef, useState } from "react";
import styles from "./lifestyle.module.css";

const LifestyleComponent = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1.4 });

  const onScroll = (e) => {
    const delta = e.deltaY * -0.001;
    const newScale = pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;

    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio,
    });
  };
  return (
    <div className={styles.lifestyle_main}>
      <img
        style={{
          transformOrigin: "0 0",
          transform: ` translateX(-${pos.x}px) translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
        }}
        onWheelCapture={onScroll}
        className={styles.lifestyle_img}
        src="life.jpg"
      />
      <p className={styles.lifestyle_txt}>Lifestyle Scenes</p>
    </div>
  );
};

export default LifestyleComponent;
