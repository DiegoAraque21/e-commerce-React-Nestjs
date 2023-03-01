import axios from 'axios';

// function to get products, not sorted
export const getProducts = async () => {
  // get products from server
  const { data } = await axios.get('http://localhost:8080/products');
  return data;
};
