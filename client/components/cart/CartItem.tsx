import React from 'react';
import { CartItems } from '@/types/cart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types/product';

interface Props {
  item: CartItems;
}

function CartItem({ item }: Props) {
  const { addElementToCart, subtractElementFromCart, deleteElementFromCart } =
    useCart();

  // function to handle add item to cart
  const handleAddItem = (product: Product) => {
    addElementToCart(product);
  };

  // function to handle substract item from cart
  const handleSubstractItem = (product: Product) => {
    subtractElementFromCart(product);
  };

  // function to handle delete item from cart
  const handleDeleteItem = (product: Product) => {
    deleteElementFromCart(product);
  };

  return (
    <div className="flex flex-row justify-around items-center border rounded shadow-lg mb-10 p-5">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-contain"
      />
      <p className="text-lg font-bold ml-5">
        ${(item.product.price * item.quantity).toFixed(2)}
      </p>
      <div>
        <button
          className="bg-[#357a38] rounded-full w-8 h-8 flex justify-center items-center text-white font-bold"
          onClick={() => handleAddItem(item.product)}
        >
          +
        </button>
        <span className="mx-2 flex justify-center items-center">
          {item.quantity}
        </span>
        <button
          className="bg-[#357a38] rounded-full w-8 h-8 flex justify-center items-center text-white font-bold"
          onClick={() => handleSubstractItem(item.product)}
        >
          -
        </button>
      </div>
      <DeleteIcon
        className="text-red-600 cursor-pointer"
        onClick={() => handleDeleteItem(item.product)}
      />
    </div>
  );
}

export default CartItem;
