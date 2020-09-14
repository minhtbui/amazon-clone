import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Orders from './Components/Orders';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './ContextAPI/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
   'pk_test_51HQx2sGjieoPvok2NfGdRCoYJhwUhJ0S0PUP1RuONaNTC54Tr7PXeJS6K5u1TpWyjyPjU1yCVYM7gkYYVK4BY0DK00pHnJxpTX',
);

function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            // user login
            dispatch({
               type: 'SET_USER',
               user: authUser,
            });
         } else {
            //user logout
            dispatch({
               type: 'SET_USER',
               user: null,
            });
         }
      });
      return () => {};
   }, []);

   return (
      <Router>
         <div className='App'>
            <Switch>
               <Route path='/orders'>
                  <Header />

                  <Orders />
               </Route>

               <Route path='/payment'>
                  <Header />
                  <Elements stripe={promise}>
                     <Payment />
                  </Elements>
               </Route>

               <Route path='/login'>
                  <Login />
               </Route>

               <Route path='/checkout'>
                  <Header />
                  <Checkout />
               </Route>

               <Route path='/'>
                  <Header />
                  <Home />
               </Route>

               {/* body */}
            </Switch>
         </div>
      </Router>
   );
}

export default App;
