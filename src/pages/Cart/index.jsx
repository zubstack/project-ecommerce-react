import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import FinalProductCard from '../../components/FinalProductCard';
import Summary from '../../components/Summary';

function Cart() {
  const { shoppingCart } = useContext(ShoppingCartContext);
  function getTotalPrice() {
    //const prices = shoppingCart.map((product) => product.item.price);

    //return prices.reduce(
    //(accumulator, currentValue) => accumulator + currentValue,
    //0
    //);
    return '$$';
  }
  if (!shoppingCart.length) {
    return (
      <>
        <div className='px-10 mt-12'>
          <h1 className='text-4xl mb-8'>
            Shopping Cart
            <hr className='border-orange-500 mt-2 w-1/5' />
          </h1>
          <p className='font-thin mb-20'>Your shopping cart is empty!</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='flex gap-20'>
        <div className='px-10 mt-12'>
          <h1 className='text-4xl mb-8'>
            Shopping Cart
            <hr className='border-orange-500 mt-2 w-2/5' />
          </h1>
          <div className='px-1 overflow-auto h-[70vh]'>
            {shoppingCart?.map((product) => (
              <FinalProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
        <Summary total={getTotalPrice()} />
      </div>
    </>
  );
}

//PENDING: Remove option
//PENDING: Set quantity option

export default Cart;
