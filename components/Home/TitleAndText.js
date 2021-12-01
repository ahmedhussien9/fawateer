import styles from "./TitleAndText.module.scss";
function TitleAndText(props) {
  return (
    <div className={styles.informationContainer}>
      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
        <p className={styles.text}>{props.subText}</p>
      </div>
    </div>
  );
}

export default TitleAndText;
