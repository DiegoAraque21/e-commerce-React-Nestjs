export interface CartItems {
  product: Product;
  quantity: number;
}

export interface Cart {
  cart: CartItems[];
}
