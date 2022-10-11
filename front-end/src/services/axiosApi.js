import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://localhost:3001/',
});

export default axiosApi;
// export const productsList = async (t) => {
//   const result = await axiosApi
//     .get('/products')
//     .catch((error) => error.response.data);
//   return result.data;
// };