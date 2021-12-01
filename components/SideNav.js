import styles from "./SideNav.module.scss";
import Image from "next/image";
import Link from "next/link";

function SideNav(props) {
  const close = () => {
    props.close(false);
  };

  const login = () => {
    window.open("https://fawateer.azurewebsites.net/Account/Login", "_blank");
  };

  return (
    <div
      className={`${styles.sideNav} ${
        props.isOpenSideNav ? styles.openSideNav : ""
      }`}
    >
      <div className={styles.header}>
        <button onClick={close} className={styles.closeButton}>
          <Image
            src="/close.svg"
            alt="close sidenav"
            height="35px"
            width="35px"
          />
        </button>
      </div>
      <div className={styles.logo}>
        <Image
          src="/footer-logo.svg"
          alt="logo"
          height="60px"
          width="160px"
        ></Image>
      </div>
      <ul className={`${styles.list}`}>
        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "banner",
            }}
          >
            Home
          </Link>
        </li>
        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "whatIsFawateer",
            }}
          >
            What is fawateer?
          </Link>
        </li>

        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "features",
            }}
          >
            Features
          </Link>
        </li>
        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "benefits",
            }}
          >
            Benefits
          </Link>
        </li>

        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "plans",
            }}
          >
            Plans
          </Link>
        </li>
        <Link
          href={{
            pathname: "/",
            hash: "plans",
          }}
        >
          Contact us
        </Link>
        <li className={`${styles.item} ${styles.link} ${styles.login}`}>
          <button onClick={login} className={styles.login}>
            LOGIN
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
