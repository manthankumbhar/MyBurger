import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-74564.firebaseio.com/'
})

export default instance;