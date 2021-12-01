import Image from "next/image";
import styles from "./Service.module.scss";
function Service(props) {
  return (
    <div className={styles.service}>
      <div className={styles.imageContainer}>
        <Image
          src={props.image}
          alt={props.title}
          height="60px"
          width="60px"
        ></Image>
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.imageContainer}>
        <Image
          src="/images/dots.svg"
          alt="dot icon"
          height="10px"
          width="70px"
        ></Image>
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}

export default Service;
