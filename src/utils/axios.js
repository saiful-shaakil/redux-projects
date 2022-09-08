import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://arcane-mesa-84287.herokuapp.com",
});

export default axiosInstance;
