import React from "react";

import StripeCheckout from "react-stripe-checkout";

// In order for proper charge to made STRIPE want price in CENTS
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  //changing USD into CENTS STRIPE requirement
  const publishableKey =
    "pk_test_51GrgimAINr4sVcDEwqAc21i9oB6b4N2OdwVEtngNqprU9NUxmBwQlTrzKhzxzD9JJGVER2qhHFDhUDz0ts07ffgs00F4783MB6";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      //these properties are mentioned in there documentation
      label="Pay Now"
      name="CRWN CLOTHING"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken} //this tn will be send to backend which will process it but for our purpose just consoling it ...its on csuccess callBack
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
