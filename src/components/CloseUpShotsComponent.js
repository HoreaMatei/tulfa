import styles from "./closeupShots.module.css";

const CloseUpShotsComponent = () => {
  return (
    <div>
      <p>Close Up Shots</p>
      <img className={styles.closeup_shots_img} src="closeUpShots/2.jpg" />
      <div className={styles.closer_look_div}>
        <p>Take a closer look</p>
        <img src="closeUpShots/expand.png" />
      </div>
    </div>
  );
};

export default CloseUpShotsComponent;
