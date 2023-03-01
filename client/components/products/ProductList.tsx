import React, { useState, useEffect } from 'react';
import { getProducts } from '../../pages/api/products';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

function ProductList() {
  // products state
  const [products, setProducts] = useState<Product[] | null>(null);

  // fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="my-5">
      <div className="grid grid-cols-4 gap-y-4 justify-items-center">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
