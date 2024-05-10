import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_THEMOVIEDB_API_KEY_READ}`,
  },
});

export default axiosInstance;
