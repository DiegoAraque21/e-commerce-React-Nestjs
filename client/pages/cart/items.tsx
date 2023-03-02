import React from 'react';
import Page from '../../components/Page';
import { useCartContext } from '@/hooks/useCartContext';
import { CartItems } from '@/types/cart';
import CartItem from '@/components/cart/CartItem';
import CartPayment from '@/components/cart/CartPayment';

function cart() {
  // cart
  const { state } = useCartContext();

  return (
    <Page>
      <h3 className="pl-10 text-xl font-bold mb-10">Your Cart</h3>
      <div className="flex flex-col md:flex-row space-x-4 md:pl-10 pl-2">
        <div className="w-[95%] md:w-[60%]">
          {state.cart.length > 0 ? (
            state.cart.map((item: CartItems) => (
              <CartItem key={item.product.id} item={item} />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        {state.cart.length > 0 && <CartPayment />}
      </div>
    </Page>
  );
}

export default cart;
