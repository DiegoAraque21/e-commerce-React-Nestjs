import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '@/components/Page';
import CircularProgress from '@mui/material/CircularProgress';

function success() {
  const router = useRouter();
  const [notLoading, setIsNotLoading] = useState(true);

  useEffect(() => {
    // check payment-intent url and payment_intent_client_secret
    const url = window.location.href;
    const paymentIntent = url.split('payment_intent=')[1];
    const clientSecret = url.split('payment_intent_client_secret=')[1];
    if (!paymentIntent || !clientSecret) {
      router.push('/');
    } else {
      setIsNotLoading(false);
    }
  }, []);

  console.log('notLoading: ', notLoading);
  if (notLoading) {
    <Page>
      <div className="w-full flex">
        <CircularProgress className="mx-auto mt-[100px]" />
      </div>
    </Page>;
  } else {
    return (
      <Page>
        <div className="ml-10 font-bold text-2xl">
          Payment completed. Thanks for your order!
        </div>
      </Page>
    );
  }
}

export default success;
