import { Cart } from '../types/cart';
import { createContext, useReducer } from 'react';

// Types

interface Props {
  children: JSX.Element;
}

interface Action {
  type: string;
  payload: any;
}

// initial state for the useReducer hook
const initialState: Cart = {
  cart: [],
};

// create the CartContext
export const CartContext = createContext({} as any);

// create the reducer that the useReducer hook will take
export const CartReducer = (state: Cart, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }],
      };
    case 'INCREASE_QUANTITY':
      // find product in cart and increase quantity
      const updatedCart = state.cart.map((item) => {
        if (item.product.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    case 'DECREASE_QUANTITY':
      return { ...state, cart: action.payload };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: action.payload };
    default:
      return { ...state };
  }
};

// create the component in which we will wrap all of our app
// to provide the cart context
export const CartContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
