import Benefit from "../Benefit/Benefit";
import styles from "./BenefitList.module.scss";
function BenefitList(props) {
  const { items } = props;
  return (
    <div className={styles.grid}>
      {items.map((item, i) => {
        return (
          <Benefit title={item.title} image={item.image} key={i}></Benefit>
        );
      })}
    </div>
  );
}
export default BenefitList;
