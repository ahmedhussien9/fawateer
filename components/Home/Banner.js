import styles from "./Banner.module.scss";
import ButtonWithIcon from "./ButtonWithIcon";
function Banner(props) {
  return (
    <div className={styles.banner}>
      <div
        className={`${styles.content} ${"container"}`}
        data-aos="fade-up-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1 className={styles.title}>
          {props.title} <br />
          {props.subTitle}
        </h1>
        <p className={styles.text}>
          {props.text} <br />
          {props.subText}
        </p>
        <ButtonWithIcon title={props.buttonTitle}></ButtonWithIcon>
      </div>
    </div>
  );
}

export default Banner;
