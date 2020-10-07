import axios from "axios";

let store = JSON.parse(localStorage.getItem("adotei@token") || {});

const apiService = axios.create({
  baseURL: "https://adotei-back.herokuapp.com",
  headers: {
    auth: store.token,
  },
});

export default apiService;
