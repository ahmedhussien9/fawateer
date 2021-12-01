import FeatureItem from "../FeatureItem/FeatureItem";
import styles from "./Feature.module.scss";
function FeatureList(props) {
  const { items } = props;
  return (
    <div className={styles.list}>
      {items &&
        items.map((item, i) => {
          return (
            <FeatureItem
              key={i}
              title={item.title}
              image={item.image}
              text={item.text}
            ></FeatureItem>
          );
        })}
    </div>
  );
}

export default FeatureList;
