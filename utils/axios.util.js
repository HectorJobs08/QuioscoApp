import axios from 'axios';

export const AxiosClient = axios.create({
  baseURL: process.env.BACKEND_ENDPOINT,
});