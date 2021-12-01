import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ButtonWithIcon.module.scss";
import Link from "next/link";
function ButtonWithIcon(props) {
  return (
    <div className={styles.link}>
      <Link
        href={{
          pathname: "/",
          hash: "plans",
        }}
      >
        <a>
          {props.title}
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </a>
      </Link>
    </div>
  );
}
export default ButtonWithIcon;
