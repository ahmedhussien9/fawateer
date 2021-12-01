import Service from "./Service";
import styles from "./ServiceList.module.scss";
function ServiceList(props) {
  return (
    <div className={styles.servicesContainer}>
      <div className="container">
        <div className={styles.grid}>
          {props.services.map((service, key) => {
            return (
              <Service
                key={key}
                image={service.image}
                title={service.title}
                text={service.text}
              ></Service>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
