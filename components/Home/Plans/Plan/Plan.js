import styles from "./Plan.module.scss";
import NumberFormat from "react-number-format";
import Link from "next/link";

function Plan(props) {
  const { tier, key } = props;

  const addEdition = () => {
    localStorage.setItem("Edition", JSON.stringify(tier));
  };

  return (
    <div
      className={styles.card}
      data-aos="flip-left"
      key={key}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className={styles.header}>
        <h5 className={styles.title}>{tier.name}</h5>
      </div>
      <div className={styles.priceWrapper}>
        <h5 className={styles.priceValue}>
          <NumberFormat
            value={tier.price}
            displayType="text"
            thousandSeparator={true}
            prefix="SAR "
          />
        </h5>
      </div>
      <ul className={styles.list}>
        {tier &&
          tier.features &&
          tier.features.map((feature, index) => {
            return (
              <li className={styles.item} key={index}>
                {feature}
              </li>
            );
          })}
      </ul>
      <div className={styles.planFooter}>
        <Link
          href={{
            pathname: "/register",
            query: { tierId: tier.editionId },
          }}
        >
          <a onClick={addEdition}>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}

export default Plan;
