import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../ContextAPI/StateProvider';
import { auth } from '../firebase';
import Toggler from '../DarkMode/Toggler';

function Header({ theme, toggleTheme }) {
   const history = useHistory(); // automatically change the URL
   const [{ cart, user }, dispatch] = useStateValue();

   const handleSignOut = () => {
      auth
         .signOut()
         .then((auth) => {
            if (!auth) {
               history.push('/login');
            }
         })
         .catch((error) => alert(error.message));
   };

   const userName = (userEmail) => {
      if (userEmail) {
         const userName = userEmail.substring(0, userEmail.lastIndexOf('@'));
         return userName;
      }
   };

   return (
      <div className='header'>
         <Link to='/'>
            <img
               src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
               alt='header logo'
               className='header__logo'
            />
         </Link>

         <div className='header__search'>
            <input type='text' className='header__searchInput' />
            <SearchIcon className='header__searchIcon' />
         </div>

         <div className='header__nav'>
            <Toggler
               className='header__navToggle'
               theme={theme}
               toggleTheme={toggleTheme}
            />

            <Link to={!user && '/login'} className='header__navLink'>
               <div className='header__navOption' onClick={handleSignOut}>
                  <span className='header__navOption--lineOne'>
                     Hello, {user ? userName(user?.email) : 'guest'}
                  </span>
                  <span className='header__navOption--lineTwo'>Account</span>
               </div>
            </Link>

            <Link to='/orders' className='header__navLink'>
               <div className='header__navOption'>
                  <span className='header__navOption--lineOne'>Returns</span>
                  <span className='header__navOption--lineTwo'>& Orders</span>
               </div>
            </Link>

            <Link to='/' className='header__navLink'>
               <div className='header__navOption'>
                  <span className='header__navOption--lineOne'>Try</span>
                  <span className='header__navOption--lineTwo'>Prime</span>
               </div>
            </Link>

            <Link to='/checkout' className='header__navLink'>
               <div className='header__navCart'>
                  <ShoppingCartOutlinedIcon />
                  <span className='header__navCart--cartCount'>
                     {cart?.length}
                  </span>
               </div>
            </Link>
         </div>
      </div>
   );
}

export default Header;
