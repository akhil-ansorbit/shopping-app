import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App/Store';
import { AiFillCheckCircle } from 'react-icons/ai';
import Total from '../Components/Total';

const ConformOrder = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const date = new Date().toDateString();
  const time = new Date().toTimeString();
  const id = Math.random();
  return (
    <div>
      <div className='text-lime-600 flex justify-center text-2xl font-semibold items-center gap-2'>
        <span>Your order has been placed!</span>
        <AiFillCheckCircle />
      </div>
      <div className='flex justify-center text-center'>
        <Total />
      </div>
      <div className='flex justify-center text-lg'>{`Order Date : ${date} `}</div>
      <div className='flex justify-center text-lg'>{`Order time : ${time} `}</div>
      <div className='flex justify-center text-lg'>{`Order ID : ${
        id * 10000000000000000
      } `}</div>
      <hr />
      <div className='flex justify-center text-2xl'>Order Details</div>
      {cart?.map((val) => {
        return (
          <div key={val.id}>
            <div className='flex border p-2 m-2'>
              <div>
                <img
                  src={val.images[0]}
                  style={{ height: '145px', width: '200px' }}
                />
              </div>
              <div className='align-middle pl-2'>
                <div className='text-xl'>{val.category}</div>
                <div className='text-lg'>{val.brand}</div>
                <div className='text-lg'>{val.title}</div>
                <div>{val.description}</div>
                <div className='text-lg'> Qty : {val.quantity}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConformOrder;
