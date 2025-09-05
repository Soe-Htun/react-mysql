// src/utils/http.js
import axios from "axios";
import { store } from "../store"; // import your Redux store
import { logout } from "../store/slice/userSlice";

// Get token from Redux store
const getToken = () => store.getState().user.token;
const http = axios.create();
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.baseURL = import.meta.env.VITE_BASE_URL;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    
    // optional: disable cache
    config.headers["Cache-Control"] = "no-cache";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if(error.response && error.response.status === 401) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
)
export default http;


// const http = {
//   get: async (url, config = {}) => {
//     const token = getToken();
//     return axios.get(url, {
//       ...config,
//       headers: {
//         Authorization: token ? `Bearer ${token}` : "",
//         ...(config.headers || {}),
//       },
//     });
//   },

//   post: async (url, data, config = {}) => {
//     const token = getToken();
//     return axios.post(url, data, {
//       ...config,
//       headers: {
//         Authorization: token ? `Bearer ${token}` : "",
//         ...(config.headers || {}),
//       },
//     });
//   },

//   put: async (url, data, config = {}) => {
//     const token = getToken();
//     return axios.put(url, data, {
//       ...config,
//       headers: {
//         Authorization: token ? `Bearer ${token}` : "",
//         ...(config.headers || {}),
//       },
//     });
//   },

//   delete: async (url, config = {}) => {
//     const token = getToken();
//     return axios.delete(url, {
//       ...config,
//       headers: {
//         Authorization: token ? `Bearer ${token}` : "",
//         ...(config.headers || {}),
//       },
//     });
//   },
// };

// export default http;
