import styles from "./secondTextComponent.module.css";

const SecondTextComponent = () => {
  return (
    <div className={styles.second_text_comp_main}>
      <p className={styles.lorem_text}>
        Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac. Leo
        eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla
        eget.
      </p>
      <h1 className={styles.lorem_h1}>Lorem Ipsum</h1>
    </div>
  );
};

export default SecondTextComponent;
