const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

module.exports = async function () {
  const response = await stripe.prices.list({
    expand: ["data.product"]
  });
  console.log(response.data);
  return response.data;
};
