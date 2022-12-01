import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/Counter/CounterSlice';

const Card = (props: any) => {
  const { product, imgurl, title, price, rating } = props;
  const dispatch = useDispatch();
  const [button1, setButton] = useState(true);
  const handelClick = () => {
    dispatch(addToCart(product));
    setButton(false);
  };
  return (
    <div className=' flex justify-between flex-1 max-w-xl flex-col border border-solid  border-black m-10 mt-6 w-2/3 rounded-md'>
      <div className='flex max-w-xs max-h-64 p-1'>
        <img className='w-full' src={imgurl} alt={title} />
      </div>
      <div>
        <div className='flex p-3  text-ellipsis text-slate-400'>
          <h1> Title : {title} </h1>
        </div>
        <div className='flex justify-between p-3 text-slate-400'>
          <span>Price : ${price}</span>
          <span> Rating : {rating}</span>
        </div>
        {button1 ? (
          <button
            onClick={handelClick}
            className='border border-zinc-900 bg-neutral-400 p-2 cursor-pointer w-full'
          >
            Add to cart
          </button>
        ) : (
          <button className='border border-zinc-900 bg-neutral-400 p-2 cursor-pointer w-full'>
            Added to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
