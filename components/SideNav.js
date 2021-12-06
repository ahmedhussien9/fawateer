import styles from "./SideNav.module.scss";
import Image from "next/image";
import Link from "next/link";

function SideNav({ isOpenSideNav, close }) {
  const login = () => {
    window.open("https://fawateer.azurewebsites.net/Account/Login", "_blank");
  };

  return (
    <div
      className={`${styles.sideNav} ${isOpenSideNav ? styles.openSideNav : ""}`}
    >
      <div className={styles.header}>
        <button onClick={() => close(false)} className={styles.closeButton}>
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
            onClick={() => close(false)}
          >
            <a onClick={() => close(false)}> Home</a>
          </Link>
        </li>
        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "whatIsFawateer",
            }}
          >
            <a onClick={() => close(false)}> What is fawateer?</a>
          </Link>
        </li>

        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "features",
            }}
          >
            <a onClick={() => close(false)}> Features</a>
         
          </Link>
        </li>
        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "benefits",
            }}
          >
            <a onClick={() => close(false)}> Benefits</a>
          </Link>
        </li>

        <li className={`${styles.item} ${styles.link}`}>
          <Link
            href={{
              pathname: "/",
              hash: "plans",
            }}
          >
            <a onClick={() => close(false)}> Plans</a>
          </Link>
        </li>
        
        <Link
          href={{
            pathname: "/",
            hash: "plans",
          }}
        >
          <a onClick={() => close(false)}> Contact us</a>
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
