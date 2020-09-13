import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import { Link } from 'react-router-dom';

import CheckoutProduct from './CheckoutProduct';
import './Payment.scss';

function Payment() {
   const [{ cart, user }, dispatch] = useStateValue();

   return (
      <div className='payment'>
         <h1>
            Payment (<Link to='/checkout'>{cart.length} items</Link>)
         </h1>
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
               <div className='payment__methods'></div>
            </div>
         </div>

         <div className='payment__containerRight'>
            <h1>Right</h1>
         </div>
      </div>
   );
}

export default Payment;
