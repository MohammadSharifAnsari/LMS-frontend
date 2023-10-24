
import axios from "axios";


// server ka url hai base url
const BASE_URL='http://localhost:7000';
// const BASE_URL='http:// localhost:5014/api/v1';

// axois.create() create the instance of axios
const axiosInstance=axios.create();

axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials=true;

// you can read axios.intance
export default axiosInstance;

