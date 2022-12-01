import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App/Store';

const ConformOrder = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <div>
      {cart?.map((val) => {
        return (
          <div key={val.id}>
            <img src={val.images[0]} alt={val.title} />
          </div>
        );
      })}
    </div>
  );
};

export default ConformOrder;
