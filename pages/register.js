import styles from "../styles/Register.module.scss";
import Layout from "../components/Layout/Layout";
import Plan from "../components/Home/Plans/Plan/Plan";
import path from "path";
import fs from "fs/promises";
import { useEffect, useState } from "react";
import SectionHeader from "../components/Home/SectionHeader";
import RegisterForm from "../components/Register/RegisterForm/RegisterForm";
import { useRouter } from "next/router";

function Register({ footerData, registerForm, navBar }) {
  const [tier, setTier] = useState(null);
  const { history } = useRouter();
  
  useEffect(() => {
    return () => {
      if (history && history.action && history.action === "POP") {
        history.replace(history.location.pathname);
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
      <Layout
        title="Home page"
        description="This the description"
        footerDate={footerData}
        navBar={navBar}
      >
        <SectionHeader
          title={registerForm.title}
          text={registerForm.subTitel}
        />
        <div className={`${styles.registerWrapper} container`}>
          <div className={styles.registerContent}>
            <div className={styles.planWrap}>
              <Plan tier={tier} />
            </div>
            <RegisterForm
              tierId={tier.id}
              editionId={tier.editionId}
              registerForm={registerForm}
            ></RegisterForm>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;

// Get static data from dummy file
// read this data and then pass them as static props
// to able to render them statically

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { locale } = context;
  const staticData = await getData();
  const footerData = staticData.Home.Footer[locale];
  const registerForm = staticData.Home.RegisterForm[locale];
  const navBar = staticData.Home.NavBar[locale];

  try {
    planData = await getPlansApi();
  } catch (err) {
    // console.log(err);
  }
  return {
    props: {
      footerData: footerData,
      registerForm: registerForm,
      navBar: navBar,
    },
  };
}
