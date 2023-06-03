import axios from 'axios';

const axiosMain = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      localStorage.getItem('authToken') || localStorage.getItem('createUserauthToken')
    }`
  }
});

export const setBaseUrl = (baseUrl) => {
  axiosMain.defaults.baseURL = baseUrl;
};

export default axiosMain;
