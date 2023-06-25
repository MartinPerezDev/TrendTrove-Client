import axios from 'axios';

const axiosApiTrendTrove = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    axiosApiTrendTrove.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosApiTrendTrove.defaults.headers.common['Authorization'];
  }
};


export default axiosApiTrendTrove;
