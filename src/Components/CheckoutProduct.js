import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from '../ContextAPI/StateProvider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
function CheckoutProduct({ id, image, title, rating, price, qty, hideBtn }) {
   const [{ cart }, dispatch] = useStateValue();

   const removeProduct = () => {
      dispatch({
         type: 'REMOVE_FROM_CART',
         id: id,
      });
   };

   const handleQtyBtn = (btn) => {
      if (btn === 'add') {
         dispatch({
            type: 'UPDATE_ITEM',
            id: id,
            qty: qty + 1,
         });
      } else {
         dispatch({
            type: 'UPDATE_ITEM',
            id: id,
            qty: qty - 1,
         });
      }
   };

   return (
      <div className='checkoutItem' id={id}>
         <img src={image} alt='product img' className='checkoutItem__image' />

         <div className='checkoutItem__info'>
            <h3 className='checkoutItem__infoTitle'>{title}</h3>
            <div className='checkoutItem__infoRating'>
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <span key={i}>💩</span>
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
         <div className='checkoutItem__rightContainer'>
            {!hideBtn && (
               <div className='checkoutItem__qty'>
                  <RemoveCircleOutlineIcon
                     className='checkoutItem__qtyBtn'
                     onClick={() => (qty > 1 ? handleQtyBtn('remove') : '')}
                  />
                  <span>{qty}</span>
                  <AddCircleOutlineIcon
                     className='checkoutItem__qtyBtn'
                     onClick={() => handleQtyBtn('add')}
                  />
               </div>
            )}

            <p className='checkoutItem__price'>
               <small>$</small>
               <strong>{(qty * price).toFixed(2)}</strong>
            </p>
         </div>
      </div>
   );
}

export default CheckoutProduct;
