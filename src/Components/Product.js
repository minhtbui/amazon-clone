import React from 'react';
import './Product.scss';
import { useStateValue } from '../ContextAPI/StateProvider';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Product({ id, title, price, rating, image }) {
   const [{ cart }, dispatch] = useStateValue();

   const addToCart = () => {
      if (id) {
         dispatch({
            type: 'ADD_TO_CART',
            item: {
               id: id,
               title: title,
               image: image,
               price: price,
               rating: rating,
               qty: 1,
            },
         });
      }
   };
   return (
      <div className='product'>
         <div className='product__info'>
            <h4 className='product__infoTitle'>{title}</h4>

            <div className='product__infoRating'>
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <span key={i}>💩</span>
                  ))}
            </div>

            <p className='product__infoPrice'>
               <small>$</small>
               <strong>{price}</strong>
            </p>
         </div>

         <div className='product__image'>
            <img src={image} alt='product img' />
         </div>

         <button className='product__addBtn' onClick={addToCart}>
            <ShoppingCartOutlinedIcon className='product__addBtn--icon' />
            Add to cart
         </button>
      </div>
   );
}

export default Product;
