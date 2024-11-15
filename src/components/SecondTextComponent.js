import LoremText from "./LoremText";
import styles from "./secondTextComponent.module.css";

const SecondTextComponent = () => {
  return (
    <div className={styles.second_text_comp_main}>
      <LoremText />
      <h3 className={styles.lorem_h11}>Lorem Ipsum</h3>
    </div>
  );
};

export default SecondTextComponent;
