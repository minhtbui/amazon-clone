import React from 'react';
import './Home.scss';
import Product from './Product';
import Slider from 'infinite-react-carousel';
import { img, settings } from '../BannerImages';
import Products from './Products';

function Home() {
   const [data] = Products();

   return (
      <div className='home'>
         <div className='home__container'>
            <Slider className='home__containerImage' {...settings}>
               {img.map((e, i) => (
                  <img key={i} src={e} alt='' />
               ))}
            </Slider>

            <div className='home__containerRow'>
               {data
                  .filter((e) => e.category === 'electronics')
                  .map(
                     (product, index) =>
                        index < 3 && (
                           <Product
                              key={product.id}
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              rating={4}
                              image={product.image}
                           />
                        ),
                  )}
            </div>

            <div className='home__containerRow'>
               {data
                  .filter((e) => e.category === 'jewelery')
                  .map(
                     (product, index) =>
                        index < 2 && (
                           <Product
                              key={product.id}
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              rating={3}
                              image={product.image}
                           />
                        ),
                  )}
            </div>

            <div className='home__containerRow'>
               {data
                  .filter((e) => e.category === 'women clothing')
                  .map(
                     (product, index) =>
                        index < 3 && (
                           <Product
                              key={product.id}
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              rating={5}
                              image={product.image}
                           />
                        ),
                  )}
            </div>
         </div>
      </div>
   );
}

export default Home;
