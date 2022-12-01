import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App/Store';
import { AiFillCheckCircle } from 'react-icons/ai';

const ConformOrder = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <div>
      <div className='text-lime-600 flex justify-center text-2xl font-semibold items-center gap-2'>
        <span>Your order has been placed!</span>
        <AiFillCheckCircle />
      </div>
      {cart?.map((val) => {
        return (
          <div key={val.id}>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default ConformOrder;
