import React, { useContext } from "react";
import CartContext from "./CartContext";
// import { Container } from './styles';

const AppContext: React.FC = () => {
  // quando passa o vallor para o useCOntext, por padrão typescript já traz a tipagem
  const { products } = useContext(CartContext);
  return <div>{products?.map(product => product)}</div>;
};

export default AppContext;
