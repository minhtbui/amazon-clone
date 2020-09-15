import React, { useEffect, useState } from 'react';
import './Home.scss';
import Product from './Product';
import Slider from 'infinite-react-carousel';
import { img, settings } from '../BannerImages';
import { productAPI } from '../axios';

function Home() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      async function fetchData() {
         await productAPI
            .get('?sort=desc')
            .then((response) => {
               setProducts(response.data);
            })
            .catch((error) => {
               console.log(error);
            });
      }
      fetchData();
   }, []);

   let randRating = () => Math.floor(Math.random() * 5) + 1;

   return (
      <div className='home'>
         <div className='home__container'>
            <Slider className='home__containerImage' {...settings}>
               {img.map((i) => (
                  <img src={i} alt='' />
               ))}
            </Slider>

            <div className='home__containerRow'>
               {products
                  .filter((e) => e.category === 'electronics')
                  .map(
                     (product, index) =>
                        index < 3 && (
                           <Product
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              rating={randRating()}
                              image={product.image}
                           />
                        ),
                  )}
            </div>

            <div className='home__containerRow'>
               {products
                  .filter((e) => e.category === 'jewelery')
                  .map(
                     (product, index) =>
                        index < 2 && (
                           <Product
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              rating={randRating()}
                              image={product.image}
                           />
                        ),
                  )}
            </div>

            <div className='home__containerRow'>
               {products
                  .filter((e) => e.category === 'women clothing')
                  .map(
                     (product, index) =>
                        index < 3 && (
                           <Product
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              rating={randRating()}
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
