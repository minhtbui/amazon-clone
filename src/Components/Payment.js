import React, { useEffect, useState } from 'react';
import './Payment.scss';

import { useStateValue } from '../ContextAPI/StateProvider';
import { Link, useHistory } from 'react-router-dom';

import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getTotalCart } from '../ContextAPI/reducer';
import axios from '../axios';

function Payment() {
   const history = useHistory();
   const [{ cart, user }, dispatch] = useStateValue();

   const stripe = useStripe();
   const elements = useElements();

   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [processing, setProcessing] = useState('');
   const [succeeded, setSucceeded] = useState(false);
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
      //! generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
         const response = await axios({
            method: 'post',
            //! Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${parseInt(getTotalCart(cart) * 100)}`,
         });
         setClientSecret(response.data.clientSecret);
      };

      getClientSecret();
   }, [cart]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setProcessing(true);

      //! send clientSecret to Stripe for confirm Card
      const payload = await stripe
         .confirmCardPayment(clientSecret, {
            payment_method: {
               card: elements.getElement(CardElement),
            },
         })
         .then(({ paymentIntent }) => {
            //! paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
               type: 'EMPTY_CART',
            });
            history.replace('/orders'); //move to order page instead of pushing back
         });
   };

   const handleChange = (e) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(e.empty);
      setError(e.erorr ? e.erorr.message : '');
   };
   return (
      <div className='payment'>
         <h1>Payment</h1>
         <div className='payment__containerLeft'>
            <div className='payment__section'>
               <div className='payment__title'>
                  <h3>Delivery Address</h3>
               </div>
               <div className='payment__address'>
                  <p>{user ? user.email : 'Guest'}</p>
                  <p>Mai Chi Tho st, District 2</p>
                  <p>Vietnam</p>
               </div>
            </div>
            <div className='payment__section'>
               <div className='payment__title'>
                  <h3>Review Items</h3>
               </div>
               <div className='payment__items'>
                  {cart.map((product) => (
                     <CheckoutProduct
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        rating={product.rating}
                        price={product.price}
                     />
                  ))}
               </div>
            </div>
            <div className='payment__section'>
               <div className='payment__title'>
                  <h3>Payment Methods</h3>
               </div>
               <div className='payment__methods'>
                  {/*//! Stripe action here */}
                  <form onSubmit={handleSubmit}>
                     <CardElement onChange={handleChange} />

                     <div className='payment_priceContainer'>
                        <CurrencyFormat
                           renderText={(value) => <h4>Order Total: {value}</h4>}
                           decimalScale={2}
                           value={getTotalCart(cart)}
                           displayType={'text'}
                           thousandSeparator={true}
                           prefix={'$'}
                        />
                        <button disabled={processing || disabled || succeeded}>
                           <span>
                              {processing ? <p>Processing</p> : 'Buy Now'}
                           </span>
                        </button>
                     </div>

                     {error && <div>{error}</div>}
                  </form>
               </div>
            </div>
         </div>

         <div className='payment__containerRight'>
            <h3>
               Items: (<Link to='/checkout'>{cart.length} items</Link>)
            </h3>
         </div>
      </div>
   );
}

export default Payment;
