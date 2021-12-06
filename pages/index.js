import styles from "../styles/Home.module.scss";
import path from "path";
import fs from "fs/promises";
import TitleAndText from "../components/Home/TitleAndText";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Home/Banner";
import ServiceList from "../components/Home/ServiceList";
import FeatureContainer from "../components/Home/Feature/FeatureContainer/FeatureContainer";
import BenefitContainer from "../components/Home/Benefits/BenefitContainer/BenefitContainer";
import PlanContainer from "../components/Home/Plans/PlanContainer/PlanContainer";
import { useState, useEffect } from "react";
import { getPlansApi } from "../services/Home.api";

export default function Home(props) {
  const {
    benefits,
    benefitsTitle,
    banner,
    brandInformation,
    services,
    featureImage,
    features,
    planData,
    locale,
    footerData,
    navBar,
    plansStaticData,
  } = props;
  /**
   * Plan tiers which will hold all the plan tiers
   * Plans which will hold all the plans (Basic/Advanced/Premium)
   * PlanTierIndex will hold the selected plan index to use it for showing selected plan tiers.
   */
  const [planTiers, setSelectedPlanTiers] = useState([]);
  const [plans, setPlans] = useState([]);
  const [planTierIndex, setSelectedPlanTierIndex] = useState(0);

  /**
   * UseEffect for updating the data which will be recieved from the API
   * This will set the plan tiers for the first time we will select the first index which is 0
   * set plans will responsible for assiging the current plans each time the data is updated.
   */
  useEffect(() => {
    setSelectedPlanTiers(planData[planTierIndex].tiers);
    setPlans(planData);
  }, [planData, planTierIndex]);

  /**
   * This function is responsible for listening to the selected plan
   * Then it will change the plan tiers based on it's index
   * @param {*} plan // This is the selected plan which is basic- advanced - preimum
   * @param {*} index // This is the index for the selected plan
   */
  const planChanged = (plan, index) => {
    setSelectedPlanTierIndex(index);
    setSelectedPlanTiers(plan.tiers);
  };

  return (
    <div className={styles.container}>
      <Layout
        title="Home page"
        description="This the description"
        footerDate={footerData}
        navBar={navBar}
      >
        <section id="banner">
          <Banner
            title={banner.title}
            subTitle={banner.subTitle}
            text={banner.text}
            subText={banner.subText}
            image={banner.bannerImage}
            buttonTitle={banner.buttonTitle}
          ></Banner>
        </section>
        <section id="whatIsFawateer">
          <TitleAndText
            title={brandInformation.title}
            text={brandInformation.text}
            subText={brandInformation.subText}
          ></TitleAndText>
          <ServiceList services={services}></ServiceList>
        </section>
        <section id="features" className="container">
          <FeatureContainer
            image={featureImage}
            items={features.items}
            title={features.title}
          ></FeatureContainer>
        </section>

        <section id="benefits" className={styles.benefits}>
          <BenefitContainer
            items={benefits}
            title={benefitsTitle}
          ></BenefitContainer>
        </section>

        <section id="plans">
          <PlanContainer
            planChanged={planChanged}
            plans={plans}
            tiers={planTiers}
            plansStaticData={plansStaticData}
          ></PlanContainer>
        </section>
      </Layout>
    </div>
  );
}
// Get static data from dummy file
// read this data and then pass them as static props
// to able to render them staticlly

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { locale } = context;
  console.log(locale);
  const staticData = await getData();
  const bannerData = staticData.Home.Banner[locale];
  const brandInformation = staticData.Home.BrandInformation[locale];
  const ServicesData = staticData.Home.Services[locale];
  const featuresData = staticData.Home.Features[locale];
  const featureImage = staticData.Home.Features.img;
  const benefits = staticData.Home.Benefits[locale].items;
  const benefitsTitle = staticData.Home.Benefits[locale].title;
  const footerData = staticData.Home.Footer[locale];
  const navBar = staticData.Home.NavBar[locale];
  const plansStaticData = staticData.Home.Plans[locale];

  let planData = null;
  try {
    planData = await getPlansApi();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      banner: { ...bannerData },
      brandInformation: brandInformation,
      services: ServicesData,
      features: featuresData,
      featureImage: featureImage,
      benefits: benefits,
      benefitsTitle: benefitsTitle,
      planData: planData,
      locale: locale,
      footerData: footerData,
      navBar: navBar,
      plansStaticData: plansStaticData,
    },
  };
}
