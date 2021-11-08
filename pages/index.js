import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Home page" description="This the description">
        <h1>Welcome to efwateer website</h1>

        <ul>
          <li>
            <Link href="https://fawateer.azurewebsites.net/Account/Login">
              <a target="_blank">Login with new tab</a>
            </Link>
          </li>
          <li>
            <Link
              href="https://fawateer.azurewebsites.net/Account/Login"
              passHref={true}
            >
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </Layout>
    </div>
  );
}
