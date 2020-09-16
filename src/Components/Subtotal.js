import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../ContextAPI/StateProvider';
import { getItemsCart, getSubTotalCart } from '../ContextAPI/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
   const history = useHistory();
   const [{ cart, user }, dispatch] = useStateValue();

   return (
      <div className='subtotal'>
         {
            <CurrencyFormat
               renderText={(value) => (
                  <>
                     <p>
                        Subtotal ({getItemsCart(cart)} items):
                        <strong>{`${value}`}</strong>
                     </p>
                     <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift
                     </small>
                  </>
               )}
               decimalScale={2}
               value={getSubTotalCart(cart)}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'$'}
            />
         }
         {getItemsCart(cart) > 0 && (
            <button
               className='subtotal__checkout'
               onClick={
                  user
                     ? () => history.push('/payment')
                     : () => history.push('/login')
               }>
               Proceed to checkout
            </button>
         )}
      </div>
   );
}

export default Subtotal;
