import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from '../ContextAPI/StateProvider';

function CheckoutProduct({ id, image, title, rating, price, hideBtn }) {
   const [{ cart }, dispatch] = useStateValue();

   const removeProduct = () => {
      dispatch({
         type: 'REMOVE_FROM_CART',
         id: id,
      });
   };

   return (
      <div className='checkoutItem' id={id}>
         <img src={image} alt='product img' className='checkoutItem__image' />

         <div className='checkoutItem__info'>
            <h3 className='checkoutItem_infoTitle'>{title}</h3>
            <div className='checkoutItem__infoRating'>
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>💩</p>
                  ))}
            </div>

            {!hideBtn && (
               <button
                  className='checkoutItem__infoRemoveBtn'
                  onClick={removeProduct}>
                  Remove
               </button>
            )}
         </div>
         <div className='checkoutItem_right'>
            <p className='checkoutItem__price'>
               <small>$</small>
               <strong>{price}</strong>
            </p>
         </div>
      </div>
   );
}

export default CheckoutProduct;
