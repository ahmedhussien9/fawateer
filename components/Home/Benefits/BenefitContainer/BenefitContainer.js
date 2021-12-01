import styles from "./BenefitContainer.module.scss";
import BenefitList from "../BenefitList/BenefitList";
function BenefitContainer(props) {
  const { items, title } = props;
  return (
    <div className={`${styles.container} container`}>
      <h2 className={styles.title}>{title}</h2>
      <BenefitList items={items}></BenefitList>
    </div>
  );
}
export default BenefitContainer;
