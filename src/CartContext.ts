import { createContext } from "react";

interface Product {
  id: string;
  name: string;
  value: string;
}

interface Cart {
  products: Product[];
  shipping_value?: number;
}

// deve ter um valor inicial, ou nulo
const CartContext = createContext<Cart>({
  products: [],
  shipping_value: 0
});

export default CartContext;
