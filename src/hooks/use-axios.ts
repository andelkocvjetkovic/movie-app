import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.THEMOVIEDB_API_KEY_READ}`,
  },
  withCredentials: true,
});

function useAxios() {
  return axiosInstance;
}

export default useAxios;
