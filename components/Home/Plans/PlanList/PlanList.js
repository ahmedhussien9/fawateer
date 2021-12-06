import Plan from "../Plan/Plan";
import styles from "./PlanList.module.scss";
function PlanList(props) {
  const { tiers } = props;
  return (
    <div className={styles.grid}>
      {tiers &&
        tiers.map((tier, index) => {
          return <Plan key={tier.id} id={tier.id} tier={tier}></Plan>;
        })}
    </div>
  );
}

export default PlanList;
