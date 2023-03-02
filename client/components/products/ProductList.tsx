import React, { useState, useEffect } from 'react';
import { getProducts } from '../../pages/api/products';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import CircularProgress from '@mui/material/CircularProgress';
import Filters from '../Filters';
import { useCartContext } from '@/hooks/useCartContext';

function ProductList() {
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(false);
  // products state
  const [products, setProducts] = useState<Product[] | null>(null);
  // cart
  const { state } = useCartContext();
  // hight to low function sorting
  const lowToHighHandler = () => {
    // sort with the in-built javascript sort method.
    const sortedProducts: Product[] = [...products!].sort(
      (a, b) => a.price - b.price
    );
    setProducts(sortedProducts);
  };
  // low to high function sorting
  const highToLowHandler = () => {
    // sort with the in-built javascript sort method.
    const sortedProducts: Product[] = [...products!].sort(
      (a, b) => b.price - a.price
    );
    setProducts(sortedProducts);
  };

  // fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await getProducts();
      if (data) {
        setProducts(data);
      } else {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="w-full flex">
        <p className="mx-auto mt-[100px] text-red-600">Something went wrong</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full flex">
        <CircularProgress className="mx-auto mt-[100px]" />
      </div>
    );
  }

  return (
    <div className="my-5">
      <Filters
        lowToHighHandler={lowToHighHandler}
        highToLowHandler={highToLowHandler}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 justify-items-center">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
