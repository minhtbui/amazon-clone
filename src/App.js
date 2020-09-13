import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './ContextAPI/StateProvider';

function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         console.log(authUser);
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
