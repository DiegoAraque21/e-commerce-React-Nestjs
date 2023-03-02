import React, { useState, useEffect } from 'react';
import { useCartContext } from '@/hooks/useCartContext';
import { CartItems } from '@/types/cart';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button } from '@mui/material';

function CartPayment() {
  const [total, setTotal] = useState(0);
  const { state } = useCartContext();

  useEffect(() => {
    // calculate total price
    const totalPrice = state.cart.reduce((acc: number, item: CartItems) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    setTotal(totalPrice);
    console.log('useEffect');
  }, [state.cart]);

  return (
    <div className="md:p-10">
      <h3 className="text-lg font-bold mb-6">Total: ${total.toFixed(2)}</h3>
      <Button
        variant="outlined"
        endIcon={<PaymentIcon />}
        style={{ backgroundColor: '#3f51b5', color: 'white' }}
      >
        Pay
      </Button>
    </div>
  );
}

export default CartPayment;
