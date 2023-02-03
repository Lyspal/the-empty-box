const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

module.exports = async function () {
  const response = await stripe.prices.list({
    expand: ["data.product"]
  });
  return response.data;
};
