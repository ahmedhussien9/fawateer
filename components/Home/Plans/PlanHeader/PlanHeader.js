import styles from "./PlanHeader.module.scss";
function PlanHeader(props) {
  const { title, priceFromTo } = props;
  const handleChangePlan = () => {
    props.planChange(props.plan, props.index);
  };
  return (
    <div
      className={`${styles.card} ${
        props.isActive == props.index ? styles.active : ""
      }`}
      onClick={handleChangePlan}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{priceFromTo}</p>
    </div>
  );
}
export default PlanHeader;
