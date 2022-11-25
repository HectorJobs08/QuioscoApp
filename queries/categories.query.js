import { AxiosClient } from 'utils/axios.util.js';

export const getCategories = () => {
  return AxiosClient.get('/categorias');
}