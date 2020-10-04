import axios from 'axios';

let token = JSON.parse(localStorage.getItem("adotei@token")) || {token:""};


const apiService = axios.create({
    baseURL : 'https://adotei-back.herokuapp.com',
    headers: {
        auth:token.token,
    }
})


export default apiService;