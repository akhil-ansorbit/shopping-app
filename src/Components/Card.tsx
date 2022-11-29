import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/Counter/CounterSlice";

const Card = (props: any) => {
  const { product, imgurl, title, price, rating } = props;
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-1 max-w-xl flex-col border border-solid  border-black m-10 mt-6 w-2/3 rounded-md">
      <div className="flex max-w-xs max-h-64 p-1">
        <img style={{ width: "111%" }} src={imgurl} alt={title} />
      </div>
      <div className="flex p-3  text-ellipsis">
        <h1> Title : {title} </h1>
      </div>
      <div className="flex justify-between p-3">
        <span>Price : ${price}</span>
        <span> Rating : {rating}</span>
      </div>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="border border-zinc-900 bg-neutral-400 p-2 cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
