import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://us-central1-clone-project-a3066.cloudfunctions.net/api', // the API URL from cloud function
   //http://localhost:5001/clone-project-a3066/us-central1/api
});

export const productAPI = axios.create({
   baseURL: 'https://fakestoreapi.com/products',
});

export default instance;
