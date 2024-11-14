import { useState } from "react";
import styles from "./productSilos.module.css";
import SiloPopupComponent from "./SiloPopupComponent";

const ProductSilos = () => {
  const [openSilo, setOpenSilo] = useState(false);
  return (
    <div className={styles.silosMainDiv}>
      <div className={styles.silosSubDiv}>
        <p className={styles.silosP}>Product Silos</p>
        <button onClick={() => setOpenSilo(true)} className={styles.silosBtn}>
          <p className={styles.plus}>+</p>
          Take a closer look
        </button>
      </div>
      {openSilo ? (
        <div className={styles.silo_popup_div}>
          <SiloPopupComponent setOpenSilo={setOpenSilo} />
        </div>
      ) : null}
      <img className={styles.silosMainImg} src="./silo.jpg" />
    </div>
  );
};

export default ProductSilos;
