import moment from 'moment';
import React from 'react';
import './Order.scss';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
   return (
      <div className='order'>
         <h2>Order</h2>
         <p>{moment.unix(order.data.created).format('YYYY-MM-DD, h:mma')}</p>
         <p className='order__id'>
            Order Id:<small> {order.id}</small>
         </p>
         {order.data.cart?.map((product) => (
            <CheckoutProduct
               id={product.id}
               image={product.image}
               title={product.title}
               rating={product.rating}
               price={product.price}
               qty={product.qty}
               hideBtn
            />
         ))}
         <CurrencyFormat
            renderText={(value) => (
               <h4 className='order__total'>Order Total: {value}</h4>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
         />
      </div>
   );
}

export default Order;
