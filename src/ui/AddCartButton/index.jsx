//import { useContext } from 'react';
//import { FaCartPlus, FaCheckCircle } from 'react-icons/fa';
//import { ShoppingCartContext } from '../../context/ShoppingContext';

function AddCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='flex justify-center items-center text-center bg-black/90 py-1 w-full  text-white w-20  rounded-md'
    >
      Add to cart
    </button>
    //<FaCheckCircle className="text-xl bg-sky-700 w-full h-[30px] py-1 rounded-md hover:bg-sky-900" />
    //<FaCartPlus className="text-xl bg-black/90 w-full h-[30px] py-1 rounded-md hover:bg-black" />
  );
}

export default AddCartButton;
