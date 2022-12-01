import React from 'react';
import { useSelector } from 'react-redux';
// import Model from './Model';
import { Link } from 'react-router-dom';
import { RootState } from '../App/Store';
import Total from './Total';
// import { Cart } from '../tools/svgs';

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <>
      <div className='navbar bg-base-100 flex justify-between sticky top-0 bg-white'>
        <div className='flex-3'>
          <div className='normal-case text-xl'>Shopping-Cart</div>
        </div>
        <div className='flex justify-around flex-3'>
          <Link to='/'>
            <div>Home</div>
          </Link>
          <Link to='/addtocart'>
            <div className='pl-5'>Cart</div>
          </Link>
        </div>
        <div className='flex-none flex-4'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>
                  {cart.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
            >
              <div className='card-body bg-black'>
                <span className='font-bold text-lg text-white'>
                  {cart.length} Items
                </span>
                <span className='text-info text-s'>
                  <Total />
                </span>
                <div className='card-actions'>
                  <Link to='/addtocart'>
                    <button className='btn btn-primary btn-block'>
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
