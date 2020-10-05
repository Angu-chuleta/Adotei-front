import axios from 'axios';

let storage = localStorage.getItem('adotei@token');
let token = JSON.parse(storage ? storage : '');

const apiService = axios.create({
  baseURL: 'https://adotei-back.herokuapp.com',
  headers: {
    auth: token.token,
  },
});

export default apiService;
