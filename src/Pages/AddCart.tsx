import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App/Store';
import '../Layout/AddCart.css';
import Total from '../Components/Total';
import {
  decrement,
  increment,
  removeFromCart,
} from '../Features/Counter/CounterSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const AddCart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const removeClick = (id: number) => {
    dispatch(removeFromCart(id));
    toast('Item Removed');
  };

  return (
    <>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Item</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Total</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((val) => {
            return (
              <>
                <tr>
                  <th scope='row'>
                    <div className='flex'>
                      <div>
                        <img src={val.images[0]} className='w-16 h-19' />
                      </div>
                      <div className='pl-2'>
                        <div>{val.title}</div>
                        <div>{val.category}</div>
                        <div>{val.rating}</div>
                      </div>
                    </div>
                  </th>
                  <td> ${val.price}</td>
                  <td>
                    <div className='quantity'>
                      <a
                        href='#'
                        className='quantity__minus'
                        onClick={() =>
                          val.quantity === 1
                            ? removeClick(val.id)
                            : dispatch(decrement(val.id))
                        }
                      >
                        <span>-</span>
                      </a>
                      <input
                        name='quantity'
                        type='text'
                        className='quantity__input'
                        value={val.quantity}
                      ></input>
                      <a
                        href='#'
                        className='quantity__plus'
                        onClick={() => dispatch(increment(val.id))}
                      >
                        <span>+</span>
                      </a>
                    </div>
                  </td>
                  <td>{val.price * val.quantity}</td>
                  <td>
                    <RiDeleteBin5Fill onClick={() => removeClick(val.id)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      <Total />
      {cart.length ? (
        <Link to='/conformation'>
          <button
            type='button'
            className='btn btn-info mt-10'
            style={{ backgroundColor: '#0dcaf0', color: 'black' }}
          >
            Confirmation
          </button>
        </Link>
      ) : (
        <button
          type='button'
          className='btn btn-info mt-10'
          style={{ backgroundColor: '#0dcaf0', color: 'black' }}
          onClick={() => toast('Cart is empty')}
        >
          Confirmation
        </button>
      )}
    </>
  );
};

export default AddCart;
