import styles from "./Benefit.module.scss";
import Image from "next/image";

function Benefit(props) {
  const { title, image } = props;
  return (
    <div className={styles.card} data-aos="zoom-out-down">
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} height={55} width={60}></Image>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
export default Benefit;
