import { useEffect } from 'react';
import { productAPI } from '../axios';
import { useStateValue } from '../ContextAPI/StateProvider';

function Products() {
   const [{ data }, dispatch] = useStateValue();

   useEffect(() => {
      async function fetchData() {
         await productAPI
            .get('?sort=desc')
            .then((response) => {
               dispatch({
                  type: 'ADD_PRODUCT_DATA',
                  response: response.data,
               });
            })
            .catch((error) => {
               console.log(error);
            });
      }
      fetchData();
   }, [dispatch]);
   return [data];
}

export default Products;
