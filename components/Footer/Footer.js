import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <footer id="#footer" className={styles.footerContainer}>
      <div className={`${styles.footerWrapper} container`}>
        <div className={styles.logo}>
          <Image
            src="/footer-logo.svg"
            alt="logo"
            height="60px"
            width="160px"
          ></Image>
        </div>
        <div className={styles.home}>
          <h6 className={styles.title}>Home</h6>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/banner">- What is Fawateer?</Link>
            </li>
            <li className={styles.item}>
              <Link href="/banner">- Features</Link>
            </li>
            <li className={styles.item}>
              <Link href="/banner">- Benefits</Link>
            </li>{" "}
          </ul>
        </div>
        <div className={styles.contactus}>
          <h6 className={styles.title}>Contact us</h6>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/banner">- Privacy Policy</Link>
            </li>
            <li className={styles.item}>
              <Link href="/banner">- Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.newUpdates}>
          <h6 className={styles.title}>New Updates</h6>
          <p className={styles.text}>
            Leave your email to get our latest updates
          </p>
        </div>
      </div>
      <style jsx global>
        {``}
      </style>
    </footer>
  );
}

export default Footer;
