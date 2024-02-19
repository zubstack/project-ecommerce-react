import './styles.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from 'react-icons/fa';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import ShoppingCard from '../ShoppingCard';
import { v4 as uuidv4 } from 'uuid';

function ShoppingAside({ closeShoppingAside, shoppingOpen }) {
  const { shoppingCart, shoppingCounter } = useContext(ShoppingCartContext);

  function handleCheckout() {
    console.log('checkout');
  }
  return (
    <aside
      className={`product-detail ${
        shoppingOpen ? 'flex' : 'hidden'
      }   flex-col fixed right-0 border border-gray-100 rounded-lg  bg-white px-3 z-50`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xt'>My order</h2>
        <button>
          <FaChevronCircleRight onClick={() => closeShoppingAside()} />
        </button>
      </div>

      <div className='px-1 flex-1 max-h-[60%] overflow-auto mb-8'>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product) => (
            <ShoppingCard
              key={uuidv4()}
              data={product}
              keyId={product.key}
              hasCloseButton={true}
            />
          ))
        ) : (
          <p>{'No shoppping cart :('}</p>
        )}
      </div>
      <div className='flex gap-14 justify-around mb-4'>
        <Link to='/cart'>
          <div className='py-2 px-10 border border-black/80   rounded-lg hover:bg-gray-200'>
            View cart ({shoppingCounter})
          </div>
        </Link>

        <button
          className='py-2 px-10 bg-black/90  text-white rounded-lg  hover:bg-black'
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default ShoppingAside;
