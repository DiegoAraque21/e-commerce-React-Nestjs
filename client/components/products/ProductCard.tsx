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
    <div className="h-[350px] md:h-[380px] lg:h-[500px] w-[180px] sm:w-[220px] md:w-[180px] lg:w-[250px] xl:w-[300px] border rounded-lg shadow-lg flex flex-col items-center">
      <div className="h-[30%] lg:h-[40%] w-full mt-5 flex flex-col">
        <img
          className="h-full w-[200px] object-contain self-center"
          src={product.image}
          alt={product.title}
        />
      </div>
      {/* info product and add to cart */}
      <div className="w-[80%] px-2">
        <h3 className="text-md font-semibold mt-5 truncate">{product.title}</h3>
      </div>
      <p className="text-gray-500 mt-5">${product.price}</p>
      {/* rating */}
      <div className="flex mt-5">
        <p className="mr-2">Rating: </p>
        <StarIcon className="text-yellow-400 mr-1" />
        <p>{product.rating.rate}</p>
      </div>
      <Button
        className="my-auto"
        variant="outlined"
        endIcon={<ShoppingCartIcon />}
        color="success"
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
