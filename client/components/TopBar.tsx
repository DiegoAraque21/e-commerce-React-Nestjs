import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

function TopBar() {
  return (
    <div className="bg-[#357a38] h-[80px] flex flex-row items-center text-white mb-10">
      <Link href="/">
        <h1 className="pl-10 text-2xl font-bold">Diego's Shop</h1>
      </Link>
      <Link href="/cart/items" className="ml-auto mr-[20px]">
        <ShoppingCartIcon />
      </Link>
    </div>
  );
}

export default TopBar;
