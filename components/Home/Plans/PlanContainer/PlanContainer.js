import PlanHeader from "../PlanHeader/PlanHeader";
import styles from "./PlanContainer.module.scss";
import { useState } from "react";
import PlanList from "../PlanList/PlanList";
import { Fragment } from "react/cjs/react.production.min";

function PlanContainer(props) {
  const { plans, tiers } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const planChangeHandler = (plan, index) => {
    props.planChanged(plan, index);
    selectedHanlder(index);
  };

  const selectedHanlder = (index) => {
    setSelectIndex(index);
  };

  return (
    <Fragment>
      <div className={`${styles.container} container`}>
        <h2 className={styles.title}>Fawateer Plans</h2>
        <p className={styles.text}>Subscribe to a plan</p>
        <div className={styles.planHeaderContainer}>
          {plans &&
            plans.map((plan, i) => {
              return (
                <PlanHeader
                  planChange={planChangeHandler}
                  key={plan.id}
                  index={i}
                  title={plan.displayName}
                  priceFromTo={plan.priceFromTo}
                  isActive={selectIndex}
                  plan={plan}
                ></PlanHeader>
              );
            })}
        </div>
        <div>
          <PlanList tiers={tiers}></PlanList>
        </div>
      </div>
    </Fragment>
  );
}

export default PlanContainer;
