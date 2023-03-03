import axios from 'axios';

export const postPayment = async (total: number) => {
  // post payment to server, with the toal amount
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/transaction-intent`,
    { total }
  );
  return data;
};
