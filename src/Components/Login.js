import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.scss';
import { auth } from '../firebase';

function Login() {
   const history = useHistory(); // automatically change the URL
   const [email, setEmail] = useState('');
   const [pw, setPw] = useState('');
   console.log(email + pw);

   const signIn = (e) => {
      e.preventDefault();

      auth
         .signInWithEmailAndPassword(email, pw)
         .then((auth) => {
            if (auth) {
               history.push('/');
            }
         })
         .catch((error) => alert(error.message));
   };

   const signUp = (e) => {
      e.preventDefault();

      auth
         .createUserWithEmailAndPassword(email, pw)
         .then((auth) => {
            if (auth) {
               history.push('/');
            }
         })
         .catch((error) => alert(error.message));
   };

   return (
      <div className='login'>
         <Link to='/'>
            <img
               src='http://pngimg.com/uploads/amazon/amazon_PNG1.png'
               alt='logo'
               className='login__logo'
            />
         </Link>

         <div className='login__container'>
            <h1 className='login__title'>Sign-in</h1>
            <form action='' className='login__form'>
               <h5>Email</h5>
               <input
                  value={email}
                  type='email'
                  className='login__formInput'
                  required
                  onChange={(e) => setEmail(e.target.value)}
               />
               <h5>Password</h5>
               <input
                  value={pw}
                  type='password'
                  className='login__formInput'
                  required
                  onChange={(e) => setPw(e.target.value)}
               />

               <button
                  type='submit'
                  className='login__formSigninBtn'
                  onClick={signIn}>
                  Sign In
               </button>
            </form>
            <p className='login__policy'>
               By signing-in, you agree to Amazon's{' '}
               <a href='/'>Conditions of Use </a>
               and <a href='/'>Privacy Notice</a>
            </p>
         </div>

         <div className='login__breakLine'>
            <h5>New to Amazon?</h5>
         </div>
         <button className='login__signupBtn' onClick={signUp}>
            Create your Amazon account
         </button>
      </div>
   );
}

export default Login;
