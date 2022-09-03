import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://young-hamlet-88517.herokuapp.com/",
});
export default axiosInstance;
