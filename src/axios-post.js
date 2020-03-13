import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://grocery-d9bf8.firebaseio.com/'
});

export default instance;