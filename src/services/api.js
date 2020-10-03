import axios from 'axios';

const api = axios.create({
    baseURL : 'https://adotei-back.herokuapp.com'
})

export default api;