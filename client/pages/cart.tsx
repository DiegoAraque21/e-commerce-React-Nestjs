import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import { useCartContext } from '@/hooks/useCartContext';
import { CartItems } from '@/types/cart';
import CartItem from '@/components/cart/CartItem';
import CartPayment from '@/components/cart/CartPayment';
// stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/cart/CheckoutForm';
import { postPayment } from '@/pages/api/payment';
import { CircularProgress } from '@mui/material';

interface Appearance {
  theme: 'stripe';
}

interface PaymentIntent {
  clientSecret: string;
  ms: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

function cart() {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  // cart
  const { state } = useCartContext();

  const handlePayment = async () => {
    setLoading(true);
    // Create PaymentIntent as soon as the page loads
    const res: PaymentIntent = await postPayment(total);
    setClientSecret(res.clientSecret);
    setLoading(false);
  };

  useEffect(() => {
    // calculate total price
    const totalPrice = state.cart
      .reduce((acc: number, item: CartItems) => {
        return acc + item.product.price * item.quantity;
      }, 0)
      .toFixed(2);

    setTotal(Number(totalPrice));
  }, [state.cart]);

  const appearance: Appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  if (loading) {
    return (
      <Page>
        <div className="w-full flex">
          <CircularProgress className="mx-auto mt-[100px]" />
        </div>
      </Page>
    );
  }

  return (
    <Page>
      {clientSecret === '' ? (
        <>
          <h3 className="pl-10 text-xl font-bold mb-10">Your Cart</h3>
          <div className="flex flex-col md:flex-row space-x-4 md:pl-10 pl-2">
            <div className="w-[95%] md:w-[60%] md:h-[80vh] overflow-y-scroll mb-5">
              {state.cart.length > 0 ? (
                state.cart.map((item: CartItems) => (
                  <CartItem key={item.product.id} item={item} />
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
            {state.cart.length > 0 && (
              <CartPayment total={total} handlePayment={handlePayment} />
            )}
          </div>
        </>
      ) : (
        <div className="w-[100vw]">
          <h4 className="font-bold text-xl text-center">Total: {total}</h4>
          <div className="text-center">
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      )}
    </Page>
  );
}

export default cart;
