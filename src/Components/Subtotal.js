import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../ContextAPI/StateProvider';
import { getTotal } from '../ContextAPI/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
   const history = useHistory();
   const [{ cart }, dispatch] = useStateValue();

   return (
      <div className='subtotal'>
         {
            <CurrencyFormat
               renderText={(value) => (
                  <>
                     <p>
                        Subtotal ({cart.length} items):
                        <strong>{`${value}`}</strong>
                     </p>
                     <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift
                     </small>
                  </>
               )}
               decimalScale={2}
               value={getTotal(cart)}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'$'}
            />
         }
         <button
            className='subtotal__checkout'
            onClick={() => history.push('/payment')}>
            Proceed to checkout
         </button>
      </div>
   );
}

export default Subtotal;
