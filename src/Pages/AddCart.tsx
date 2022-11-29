import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../App/Store";
const AddCart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  console.log("cart", cart);

  return (<>
  {cart?.map((ele)=>{
    return(
      <div className=" flex flex-1 max-w-xl flex-col border border-solid  border-black m-10 mt-6 w-2/3 rounded-md">
      <div className="flex max-w-xs max-h-64 p-1">
        <img style={{ width: "111%" }} src={ele.images[0]} alt={ele.title} />
      </div>
      <div className="flex p-3  text-ellipsis">
        <h1> Title : {ele.title} </h1>
      </div>
      <div className="flex justify-between p-3">
        <span>Price : ${ele.price}</span>
        <span> Rating : {ele.rating}</span>
      </div>
      <button
        // onClick={() => dispatch(addToCart(product))}
        className="border border-zinc-900 bg-neutral-400 p-2 cursor-pointer"
      >
        Remove to cart
      </button>
    </div>
    )
  })}
  </>);
};

export default AddCart;
