import React from "react";
import styles from "./textComponent.module.css";
const TextComponent = () => {
  return (
    <div className={styles.textMainContainer}>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptate
        quia aperiam facilis suscipit nostrum repellendus asperiores.
        Architecto, vero porro laboriosam reprehenderit, illo earum eaque
        nostrum quo pariatur animi corporis.
      </div>
    </div>
  );
};

export default TextComponent;
