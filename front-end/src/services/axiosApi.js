import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default axiosApi;

export const productsList = async () => {
  const result = await axiosApi
    .get('/products')
    .catch((error) => error.response.data);
  return result.data;
};

export const productById = async (id) => {
  const result = await axiosApi
    .get(`/products/${id}`)
    .catch((error) => error.response.data);
  return result.data;
};

export const userById = async (id) => {
  const result = await axiosApi
    .get(`/users/${id}`)
    .catch((error) => error.response.data);
  return result.data;
};

export const rentedById = async (id) => {
  const result = await axiosApi
    .get(`/rented/${id}`)
    .catch((error) => error.response.data);
  return result.data;
};
