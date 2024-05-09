import axios from 'axios';

console.log(import.meta.env);

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_API_KEY_READ}`,
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

export default axiosInstance;
