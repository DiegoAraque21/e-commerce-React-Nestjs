import React, { useState, useEffect } from 'react';
// context cart
import { useCartContext } from '@/hooks/useCartContext';
import { Product } from '@/types/product';
import { CartItems } from '@/types/cart';

export function useAddToCart() {
  // state for different values
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [isPending, setIsPending] = useState(false);
  // get the dispatch function of the cart context,
  // this will let us change the state of the reducer
  const { dispatch, state } = useCartContext();
  // function to add an element to the cart
  const addElementToCart = async (product: Product) => {
    // set the pending state to true
    setIsPending(true);
    // set the error state to null
    setError(null);
    // set the isCancelled state to false
    setIsCancelled(false);
    try {
      // check if elemnt in cart, if so don't add it
      let isElementInCart = false;
      if (state.cart.length > 0) {
        isElementInCart = state.cart.find(
          (item: CartItems) => item.product.id === product.id
        );
      }
      if (!isElementInCart && !isCancelled) {
        // add the element to the cart
        dispatch({ type: 'ADD_TO_CART', payload: product });
      }
      if (!isCancelled && isElementInCart) {
        // increase quantity of the product
        dispatch({ type: 'INCREASE_QUANTITY', payload: product });
      }
    } catch (error) {
      if (!isCancelled) {
        console.log(error);
        setIsPending(false);
        setError('Item not added to cart');
      }
    }
  };

  // if it gets cancellled, it stops the execution
  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, addElementToCart };
}

export default useAddToCart;
