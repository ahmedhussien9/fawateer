import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
function Footer({footerDate}) {
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
          <h6 className={styles.title}>{footerDate.Home.title}</h6>
          <ul className={styles.list}>
            {footerDate.Home.links.map((link,index)=> <li key={index} className={styles.item}><Link href={link.href}>{"- "+ link.title}</Link></li> )}
          </ul>
        </div>
        <div className={styles.contactus}>
        <h6 className={styles.title}>{footerDate.Contact.title}</h6>
          <ul className={styles.list}>
          {footerDate.Contact.links.map((link,index)=> <li key={index} className={styles.item}><Link href={link.href}>{"- "+ link.title}</Link></li> )}
          </ul>
        </div>
        <div className={styles.newUpdates}>
        <h6 className={styles.title}>{footerDate.Updates.title}</h6>
          <p className={styles.text}>
            {footerDate.Updates.links[0].title}
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
