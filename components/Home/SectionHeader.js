import styles from "./SectionHeader.module.scss";

function SectionHeader(props) {
  const { title, text } = props;
  return (
    <section className={`${styles.header}`}>
      <div className={`${styles.headerContent} container`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>{" "}
      </div>
    </section>
  );
}

export default SectionHeader;
