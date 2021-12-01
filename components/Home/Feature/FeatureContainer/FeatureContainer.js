import FeatureList from "../FeatureList/FeatureList";
import styles from "./FeatureContaienr.module.scss";
import Image from "next/image";

function FeatureContainer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.bgImg}>
          <Image
            src={props.image}
            layout="responsive"
            objectFit="cover"
            alt="image"
            width={10}
            height={8}
          ></Image>
        </div>
      </div>

      <div className={styles.list}>
        <h2 className={styles.title}>Features</h2>
        <FeatureList items={props.items} />
      </div>
    </div>
  );
}

export default FeatureContainer;
