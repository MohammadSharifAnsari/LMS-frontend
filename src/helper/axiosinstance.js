
import axios from "axios";


// server ka url hai base url
console.log("pricess>>");

const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
// const BASE_URL='http:// localhost:5014/api/v1';

// axois.create() create the instance of axios
const axiosInstance=axios.create();

axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials=true;

// you can read axios.intance
export default axiosInstance;

