// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setLoading(true);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement),
//     });

//     setLoading(false);

//     if (error) {
//       setError(error.message);
//     } else {
//       // Call your server to process payment
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading}>
//         Pay
//       </button>
//       {error && <div>{error}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;
//     {/* <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements> */}
//     // const stripePromise = loadStripe('your_stripe_public_key');