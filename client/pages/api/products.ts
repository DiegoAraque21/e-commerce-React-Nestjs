import axios from 'axios';

// function to get products, not sorted
export const getProducts = async () => {
  // get products from server
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return data;
};
