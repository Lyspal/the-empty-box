const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

exports.handler = async function (event, context) {
  console.log({ event, context });
  if (event.httpMethod === "POST") {
    // Get the price ID from the request body.
    const params = new URLSearchParams(event.body);
    const tierId = params.get("tierId");

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: tierId,
            quantity: 1
          }
        ],
        mode: "payment",
        success_url: `${event.headers.origin}/success`,
        cancel_url: `${event.headers.origin}/cancel`
      });

      return {
        statusCode: 303,
        headers: {
          Location: session.url
        }
      };
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: err.message
      };
    }
  } else {
    return {
      headers: {
        Allow: "POST"
      },
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }
};
