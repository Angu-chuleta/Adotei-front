import axios from "axios";

const apiService = (token) => {
  let store;
  localStorage.getItem("adotei@token") !== null
    ? (store = JSON.parse(`${localStorage.getItem("adotei@token")}`))
    : (store = { token: token });
  const axiosInstance = axios.create({
    baseURL: "https://adotei-back.herokuapp.com",
    headers: {
      auth: store.token,
    },
  });
  return axiosInstance;
};

export default apiService();
