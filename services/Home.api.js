export async function getPlansApi() {
  const res = await fetch(
    "https://fawateer-test.azurewebsites.net/api/app/tiers/GetEditionsWithTiers"
  );
  const data = await res.json();
  const plans = planTiersHanlder(data);
  return await plans;
}

const planTiersHanlder = (plans) => {
  if (plans && plans.length > 0) {
    for (let index = 0; index < plans.length; index++) {
      const plan = plans[index];
      const features = plan["features"];
      for (let j = 0; j < plan.tiers.length; j++) {
        const tier = plan.tiers[j];
        features[1] = `Up to ${tier.invoicesCount} invoices B2B/B2C`;
        tier.features = features;
      }
    }
  }
  return plans;
};
