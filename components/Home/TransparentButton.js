import styles from "./TransparentButton.module.scss";
function TransparentButton(props) {
  return <button className={styles.transparentButton}>{props.title}</button>;
}
export default TransparentButton;
