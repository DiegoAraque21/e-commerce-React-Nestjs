import React from 'react';
import Page from '@/components/Page';

function paymentError() {
  return (
    <Page>
      <div className="ml-10 font-bold text-2xl text-red-600">
        Payment failed. Please try again.
      </div>
    </Page>
  );
}

export default paymentError;
