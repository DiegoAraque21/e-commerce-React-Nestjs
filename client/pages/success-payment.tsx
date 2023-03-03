import React from 'react';
import Page from '@/components/Page';

function success() {
  return (
    <Page>
      <div className="ml-10 font-bold text-2xl">
        Payment completed. Thanks for your order!
      </div>
    </Page>
  );
}

export default success;
