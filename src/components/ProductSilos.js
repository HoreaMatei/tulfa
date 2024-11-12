import styles from "./productSilos.module.css";

const ProductSilos = () => {
  return (
    <div className={styles.silosMainDiv}>
      <div className={styles.silosSubDiv}>
        <p className={styles.silosP}>Product Silos</p>
        <button className={styles.silosBtn}>
          <p className={styles.plus}>+</p>
          Take a closer look
        </button>
      </div>
      <img className={styles.silosMainImg} src="./silo.jpg" />
    </div>
  );
};

export default ProductSilos;
