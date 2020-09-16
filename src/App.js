import React, { useEffect, useState } from 'react';
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
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './DarkMode/Theme';
import { GlobalStyles } from './DarkMode/GlobalStyles';
import useDarkMode from './DarkMode/useDarkMode';

const promise = loadStripe(
   'pk_test_51HQx2sGjieoPvok2NfGdRCoYJhwUhJ0S0PUP1RuONaNTC54Tr7PXeJS6K5u1TpWyjyPjU1yCVYM7gkYYVK4BY0DK00pHnJxpTX',
);

function App() {
   const [{}, dispatch] = useStateValue();
   const [theme, themeToggler] = useDarkMode();
   const [mountedComponent, setMountedComponent] = useState(false);

   const themeMode = theme === 'light' ? lightTheme : darkTheme;

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         if (localStorage.length > 0) {
            const localTheme = window.localStorage.getItem('theme');
            dispatch({
               type: 'SET_MODE',
               theme: localTheme,
            });
         }
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
         setMountedComponent(true);
      });
      return () => {};
   }, [mountedComponent, dispatch]);

   return (
      mountedComponent && (
         <ThemeProvider theme={themeMode}>
            <>
               <GlobalStyles />

               <Router>
                  <Header theme={theme} toggleTheme={themeToggler} />

                  <div className='App'>
                     <Switch>
                        <Route path='/orders'>
                           <Orders />
                        </Route>

                        <Route path='/payment'>
                           <Elements stripe={promise}>
                              <Payment />
                           </Elements>
                        </Route>

                        <Route path='/login'>
                           <Login />
                        </Route>

                        <Route path='/checkout'>
                           <Checkout />
                        </Route>

                        <Route path='/'>
                           <Home />
                        </Route>

                        {/* body */}
                     </Switch>
                  </div>
               </Router>
            </>
         </ThemeProvider>
      )
   );
}

export default App;
