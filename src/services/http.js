import axios from 'axios';
import { environment } from '../config';

const axiosInstance = axios.create({
  baseURL: environment.baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
