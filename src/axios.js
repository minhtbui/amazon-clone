import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://localhost:5001/clone-project-a3066/us-central1/api', // the API URL from cloud function
});

export default instance;
