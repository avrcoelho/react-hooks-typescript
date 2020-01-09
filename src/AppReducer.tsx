import React, { useReducer } from "react";
// import { Container } from './styles';

interface Cart {
  products: string[];
  shipping_value?: number;
}

type CartActionType = {
  type: "ADD_PRODUCT" | "REMOVE_PRODUCT";
};

const AppReducer: React.FC = () => {
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        case "ADD_PRODUCT":
          return {
            ...state,
            products: [...state.products, "teste"]
          };
        default:
          return state;
      }
    },
    {
      products: ["asd"],
      shipping_value: 0
    }
  );

  return <div></div>;
};

export default AppReducer;
