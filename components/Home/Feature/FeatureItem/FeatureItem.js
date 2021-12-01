import styles from "./FeatureItem.module.scss";
import Image from "next/image";
function FeatureItem(props) {
  return (
    <div className={styles.item} data-aos="zoom-in">
      <div className={styles.imageContainer}>
        <Image
          src={props.image}
          alt={props.title}
          height="66.498"
          width="50.476"
        ></Image>
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
