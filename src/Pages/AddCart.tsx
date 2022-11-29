import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
const AddCart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  console.log("cart", cart);

  return <div>AddCart</div>;
};

export default AddCart;
