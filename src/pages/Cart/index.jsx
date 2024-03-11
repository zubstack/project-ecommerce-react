import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import FinalProductCard from '../../components/FinalProductCard';
import Summary from '../../components/Summary';

function Cart() {
  const { shoppingCart, setShoppingCart, getTotalPrice } =
    useContext(ShoppingCartContext);

  function handleChangeProductQuantity(quantity, id) {
    console.log('Updatin quantiyy');
    console.log('shoppingCart', shoppingCart);
    const newShoppingCart = [...shoppingCart];
    const productIndex = newShoppingCart.findIndex((item) => item.id === id);
    newShoppingCart[productIndex].quantity = Number(quantity);
    setShoppingCart([...newShoppingCart]);
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
      <div className='flex gap-4'>
        <div className='px-10 mt-12 flex-1 mb-12'>
          <h1 className='text-4xl mb-8'>
            Shopping Cart
            <hr className='border-orange-500 mt-2 w-2/5' />
          </h1>
          <div className='px-1'>
            {shoppingCart?.map((product) => (
              <FinalProductCard
                key={product.id}
                product={product}
                handleChangeProductQuantity={handleChangeProductQuantity}
              />
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
