import React from 'react';
import './Home.scss';
import Product from './Product';
import Slider from 'infinite-react-carousel';
import { img, settings } from '../BannerImages';

function Home() {
   return (
      <div className='home'>
         <div className='home__container'>
            <Slider className='home__containerImage' {...settings}>
               {img.map((i) => (
                  <img src={i} alt='' />
               ))}
            </Slider>

            <div className='home__containerRow'>
               <Product
                  id={1}
                  title='Think Like A King'
                  price={19.99}
                  rating={5}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
               <Product
                  id={2}
                  title='Think Like A King'
                  price={15.99}
                  rating={4}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
            </div>
            <div className='home__containerRow'>
               <Product
                  id={3}
                  title='Think Like A King'
                  price={10.99}
                  rating={3}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
               <Product
                  id={4}
                  title='Think Like A King'
                  price={5.99}
                  rating={2}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
               <Product
                  id={5}
                  title='Think Like A King'
                  price={1.99}
                  rating={1}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
            </div>
            <div className='home__containerRow'>
               <Product
                  id={6}
                  title='Think Like A King'
                  price={5}
                  rating={5}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
               <Product
                  id={7}
                  title='Think Like A King'
                  price={10}
                  rating={5}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81Dtutw94gL._AC_UL480_SR312,480_.jpg'
               />
            </div>
         </div>
      </div>
   );
}

export default Home;
