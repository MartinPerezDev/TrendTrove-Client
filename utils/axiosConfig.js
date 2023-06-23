import axios from 'axios';

const axiosApiTrendTrove = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default axiosApiTrendTrove;
