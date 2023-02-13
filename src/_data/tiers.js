const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

module.exports = async function () {
  const response = await stripe.prices.list({
    expand: ["data.product"]
  });

  let data = response.data.filter((product) => product.active);

  data.sort((a, b) => a.unit_amount - b.unit_amount);

  return data;
};
