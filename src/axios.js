import axios from "axios";
import { API_BASE_URL } from "./config";
// import rootReducer from './redux/rootReducer';


const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.defaults.headers.common['x-access-token']  = `${localStorage.getItem(
  "token"
)}`;

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // this checks for when a token is not verified and logs you out
    if ((error.response.status === 401 || error.response.status === 403) ) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default instance;
