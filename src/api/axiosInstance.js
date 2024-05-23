import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5434"
});         

export default axiosInstance;