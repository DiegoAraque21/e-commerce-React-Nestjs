import React from 'react';
import { Product } from '../../types/product';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  // function to add to cart
  return (
    <div className="h-[500px] w-[300px] border rounded-lg shadow-lg flex flex-col items-center">
      <div className="h-[40%] w-full mt-5 flex flex-col relative">
        <img
          className="h-full w-[200px] object-contain self-center"
          src={product.image}
          alt={product.title}
        />
        {/* rating */}
        <div className="absolute top-0 right-0 self-end mr-3">
          <StarIcon className="text-yellow-400" />
          <p>{product.rating.rate}</p>
        </div>
      </div>
      {/* info product and add to cart */}
      <h3 className="text-md font-semibold mt-5 px-10">{product.title}</h3>
      <p className="text-gray-500 mt-5">${product.price}</p>
      <Button
        className="my-auto"
        variant="outlined"
        endIcon={<ShoppingCartIcon />}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
