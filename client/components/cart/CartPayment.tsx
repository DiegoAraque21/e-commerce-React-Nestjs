import React from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import { Button } from '@mui/material';

interface Props {
  total: number;
  handlePayment: () => void;
}

function CartPayment({ total, handlePayment }: Props) {
  return (
    <div className="md:p-10 mb-10">
      <h3 className="text-lg font-bold mb-6">Total: ${total}</h3>
      <Button
        variant="outlined"
        endIcon={<PaymentIcon />}
        style={{ backgroundColor: '#357a38', color: 'white' }}
        onClick={() => {
          handlePayment();
        }}
      >
        Pay
      </Button>
    </div>
  );
}

export default CartPayment;
