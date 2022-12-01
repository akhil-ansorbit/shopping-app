import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App/Store';

const Total = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className=''>
      <div className='text-2xl'>Total Qty.:{totalQuantity}</div>
      <div className='text-4xl'>Total Prices:${totalPrice}</div>
    </div>
  );
};

export default Total;
