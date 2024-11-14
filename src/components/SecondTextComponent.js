import LoremText from "./LoremText";
import styles from "./secondTextComponent.module.css";

const SecondTextComponent = () => {
  return (
    <div className={styles.second_text_comp_main}>
      <LoremText />
      <h1 className={styles.lorem_h1}>Lorem Ipsum</h1>
    </div>
  );
};

export default SecondTextComponent;
