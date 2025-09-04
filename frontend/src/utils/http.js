// src/utils/http.js
import axios from "axios";
import { store } from "../store"; // import your Redux store

// Get token from Redux store
const getToken = () => store.getState().user.token;
const http = {
  get: async (url, config = {}) => {
    const token = getToken();
    return axios.get(url, {
      ...config,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...(config.headers || {}),
      },
    });
  },

  post: async (url, data, config = {}) => {
    const token = getToken();
    return axios.post(url, data, {
      ...config,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...(config.headers || {}),
      },
    });
  },

  put: async (url, data, config = {}) => {
    const token = getToken();
    return axios.put(url, data, {
      ...config,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...(config.headers || {}),
      },
    });
  },

  delete: async (url, config = {}) => {
    const token = getToken();
    return axios.delete(url, {
      ...config,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...(config.headers || {}),
      },
    });
  },
};

export default http;
