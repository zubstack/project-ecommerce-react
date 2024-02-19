import { FaGoogle, FaPaypal, FaShieldAlt } from 'react-icons/fa';

function Summary({ total }) {
  // const { handleCheckout } = useContext(ShoppingCartContext);
  // const navigate = useNavigate();
  function handleCheckout() {
    console.log('checkout');
  }
  return (
    <div className='container mx-auto p-4 mt-12 w-[400px]'>
      <summary className='bg-gray-100 rounded p-4 shadow-md list-none '>
        <div className='text-lg font-semibold mb-2'>Summary </div>

        <div className='flex justify-between mb-2'>
          <span className='text-gray-600'>Subtotal:</span>

          <span className='text-black'>$ {total}</span>
        </div>
        <p className='font-light text-sm text-gray-500 mb-4'>
          Shipping & taxes are calculated at checkout
        </p>
        <button
          onClick={handleCheckout}
          className='mb-4 block w-full bg-black/90 hover:bg-black text-white font-semibold px-4 py-2 rounded'
        >
          Checkout
        </button>

        <button className='border border-black/60 mb-4 block text-blue-900 w-full mt-2 bg-white hover:bg-gray-200 font-semibold px-4 py-2 rounded flex items-center justify-center'>
          <FaPaypal className='mr-2 text-2xl' />
          PayPal
        </button>

        <button className='border border-black/60 mb-4 block text-green-700 w-full mt-2 bg-white hover:bg-gray-200 font-semibold px-4 py-2 rounded flex items-center justify-center'>
          <FaGoogle className='mr-2 text-xl' />
          Google Pay
        </button>

        <p className='mt-8 text-gray-600 text-sm flex justify-center items-center gap-4'>
          <FaShieldAlt className='text-green-600 text-2xl' />
          30 Day Free Return Policy
          <a className='underline hover:text-black/70' href='#'>
            Learn more
          </a>
        </p>
      </summary>
    </div>
  );
}

export default Summary;

//PENDING: Fix prices => $0.00
//PENDING: Fix subtotal
