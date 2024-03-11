import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingContext';

function FinalProductCard({ product, handleChangeProductQuantity }) {
  const { removeFromShoppingCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex items-center border border-white border-b-stone-200 mb-3'>
      <div className='flex items-center flex-1 mb-2'>
        <figure className='w-[200px] h-[150px] border border-gray-300 rounded-md '>
          <img
            className='w-full h-full object-cover  rounded-sm '
            src={product?.images[0]}
            alt=''
          />
        </figure>
        <div className='px-4'>
          <p className='text-md font-light text-start'>{product?.name}</p>
          <p className=' text-sm font-bold'>{product?.brand}</p>

          <button
            className='font-light underline text-sm text-gray-400'
            onClick={() => removeFromShoppingCart(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className='flex flex-col items-end text-end'>
        <div className='flex mb-4 border rounded-md'>
          <label
            className='px-2 border bg-gray-200 text-gray-600'
            htmlFor='quantity'
          >
            Quantity
          </label>
          <input
            className='w-20 text-xl text-end text-gray-800 border border-black/70'
            name='quantity'
            type='number'
            placeholder='1'
            min='0'
            max={20}
            onChange={(event) => {
              setQuantity(event.target.value);
              handleChangeProductQuantity(event.target.value, product.id);
            }}
          />
        </div>
        <div className='text-sm font-light w-40 px-3'>
          <p className='text-gray-400'>Total:</p>
          <p className='text-lg '>
            $ {product?.price * (!quantity ? 1 : quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinalProductCard;
