import styles from "../styles/Register.module.scss";
import Layout from "../components/Layout/Layout";
import Plan from "../components/Home/Plans/Plan/Plan";
import { useEffect, useState } from "react";
import SectionHeader from "../components/Home/SectionHeader";
import RegisterForm from "../components/Register/RegisterForm/RegisterForm";
import { useRouter } from "next/router";

function Register() {
  const [tier, setTier] = useState(null);
  const { history } = useRouter();
  useEffect(() => {
    return () => {
      if (history && history.action && history.action === "POP") {
        history.replace(history.location.pathname /* the new state */);
      }
    };
  }, [history]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTier(JSON.parse(localStorage.getItem("Edition")));
    }
  }, []);

  if (!tier) {
    return <p>Loading....</p>;
  }

  return (
    <div className={styles.container}>
      <Layout title="Home page" description="This the description">
        <SectionHeader
          title={"Register"}
          text={
            "We hope to ensure the correctness of the data entered when registering to activate your subscription"
          }
        />
        <div className={`${styles.registerWrapper} container`}>
          <div className={styles.registerContent}>
            <div className={styles.planWrap}>
              <Plan tier={tier} />
            </div>
            <RegisterForm
              tierId={tier.id}
              editionId={tier.editionId}
            ></RegisterForm>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
