import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from "/public/logo.png";
import { Fragment } from "react/cjs/react.production.min";
import SideNav from "../../SideNav";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { handleChanageLang } from "../../../helpers/changeLanguge";

export default function Navbar({ navBar }) {
  const router = useRouter();
  const [isOpenSideNav, setSideNav] = useState(false);
  const [locale, setLocale] = useState("ar");
  const sideNavHandler = () => {
    setSideNav((prev) => !prev);
  };

  const close = (state) => {
    setSideNav(state);
  };

  const login = () => {
    window.open("https://fawateer.azurewebsites.net/Account/Login", "_blank");
  };

  const onChangeLang = (lang) => {
    handleChanageLang(lang);
    setLocale(lang);
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "ar";
    onChangeLang(lang);
    setLocale(lang);
  }, []);

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
              {navBar.links.home}
            </Link>
          </li>
          <li className={`${styles.item} ${styles.link}`}>
            <Link
              href={{
                pathname: "/",
                hash: "whatIsFawateer",
              }}
            >
              {navBar.links.WhatIsFawateer}
            </Link>
          </li>

          <li className={`${styles.item} ${styles.link}`}>
            <Link
              href={{
                pathname: "/",
                hash: "features",
              }}
            >
              {navBar.links.features}
            </Link>
          </li>
          <li className={`${styles.item} ${styles.link}`}>
            <Link
              href={{
                pathname: "/",
                hash: "benefits",
              }}
            >
              {navBar.links.benefits}
            </Link>
          </li>

          <li className={`${styles.item} ${styles.link}`}>
            <Link
              href={{
                pathname: "/",
                hash: "plans",
              }}
            >
              {navBar.links.plans}
            </Link>
          </li>
          <li className={`${styles.item} ${styles.link}`}>
            <Link
              href={{
                pathname: "/",
                hash: "plans",
              }}
            >
              {navBar.links.contactUs}
            </Link>
          </li>
          <div className={styles.actionBtn}>
            <li className={`${styles.item}`}>
              <select
                value={locale}
                onChange={(e) => onChangeLang(e.target.value)}
              >
                <option value="ar">{"عربي"}</option>
                <option value="en-US">{"English"}</option>
              </select>
            </li>
            <li
              onClick={login}
              className={`${styles.item} ${styles.link} ${styles.login}`}
            >
              {navBar.loginBtn}
            </li>
          </div>
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
