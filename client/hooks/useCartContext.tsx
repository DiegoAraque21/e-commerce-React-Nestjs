import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.log('useCartContext must be inside an CartContextProvider');
  }

  return context;
};
