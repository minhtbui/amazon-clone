import React from 'react';
import './Checkout.scss';
import Subtotal from './Subtotal.js';
import { useStateValue } from '../ContextAPI/StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
   const [{ cart }, dispatch] = useStateValue();

   return (
      <div className='checkout'>
         <div className='checkout__left'>
            <div className='checkout__leftBanner'>
               <img
                  src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                  alt=''
               />
            </div>

            <div className='checkout__leftCartList'>
               <h2 className='checkout__leftTitle'>
                  {cart?.length === 0
                     ? 'Your Amazon  Cart is empty'
                     : 'Your Amazon  Cart'}
                  <span className='checkout__leftTitle--price'>Price</span>
               </h2>
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

         <div className='checkout__right'>
            <Subtotal />
         </div>
      </div>
   );
}

export default Checkout;
