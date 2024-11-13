import CloseUpComponent from "./CloseUpComponent";
import styles from "./closeupShots.module.css";

const CloseUpShotsComponent = ({ setOpened, opened }) => {
  return (
    <div className={styles.closer_main}>
      <p className={styles.close_up_shots_p}>Close Up Shots</p>
      <img className={styles.closeup_shots_img} src="closeUpShots/2.jpg" />
      <div onClick={() => setOpened(true)} className={styles.closer_look_div}>
        <p>Take a closer look</p>
        <img className={styles.expand_icon} src="closeUpShots/expand.png" />
      </div>
      <CloseUpComponent opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default CloseUpShotsComponent;
