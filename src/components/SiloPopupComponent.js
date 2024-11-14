import CustomCarousel from "./HorizontalCarousel";
import styles from "./siloPopup.module.css";

const instalationSlides = [
  "./silo.jpg",
  "./silo.jpg",
  "./silo.jpg",
  "./silo.jpg",
  "./silo.jpg",
];

const SiloPopupComponent = ({ setOpenSilo }) => {
  return (
    <div className={styles.siloPop_main}>
      <div
        className={styles.close_icon_silo_div}
        onClick={() => setOpenSilo(false)}
      >
        <img
          className={styles.close_icon_silo}
          src="./horizontalCarousel/closeIcon1.png"
        />
      </div>
      <p className={styles.siloPop_p}>
        Ultra-high-definition images of your furniture shot from different
        angles.
      </p>
      <CustomCarousel>
        {instalationSlides.map((s, i) => (
          <div className={styles.siloPop_overflow}>
            <Box src={s} key={s} i={i} />
          </div>
        ))}
      </CustomCarousel>
    </div>
  );
};

function Box({ src, i }) {
  return <img draggable="false" src={src} className={`box${i}`} />;
}

export default SiloPopupComponent;
