// import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from "/public/logo.png";
import { Fragment } from "react/cjs/react.production.min";
import SideNav from "../../SideNav";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Navbar(props) {
  const router = useRouter();

  const [isOpenSideNav, setSideNav] = useState(false);
  const sideNavHandler = () => {
    setSideNav((prev) => !prev);
  };

  const close = (state) => {
    setSideNav(state);
  };

  const login = () => {
    window.open("https://fawateer.azurewebsites.net/Account/Login", "_blank");
  };

  return (
    <Fragment>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.list} container`}>
          <li className={styles.item}>
            <Image src={logo} height="50px" alt="" width="150px" />
          </li>
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
          <li className={`${styles.item} ${styles.link}`}>
            <Link
              href={{
                pathname: "/",
                hash: "plans",
              }}
            >
              Contact us
            </Link>
          </li>

          <li className={`${styles.item} ${styles.link} ${styles.login}`}>
            <button onClick={login} className={styles.login}>
              LOGIN
            </button>
          </li>
          <li className={`${styles.item} ${styles.menu}`}>
            <button onClick={sideNavHandler} className={styles.menuButton}>
              <Image src="/menu.svg" alt="menu" height="30px" width="40px" />
            </button>
          </li>
        </ul>
      </nav>
      <SideNav isOpenSideNav={isOpenSideNav} close={close} />
    </Fragment>
  );
}
