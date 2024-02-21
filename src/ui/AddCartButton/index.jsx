//import { useContext } from 'react';
//import { FaCartPlus, FaCheckCircle } from 'react-icons/fa';
//import { ShoppingCartContext } from '../../context/ShoppingContext';

function AddCartButton({ onClick, children, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
    //<FaCheckCircle className="text-xl bg-sky-700 w-full h-[30px] py-1 rounded-md hover:bg-sky-900" />
    //<FaCartPlus className="text-xl bg-black/90 w-full h-[30px] py-1 rounded-md hover:bg-black" />
  );
}

export default AddCartButton;
