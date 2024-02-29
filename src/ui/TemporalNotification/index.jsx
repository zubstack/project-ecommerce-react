import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function TemporalNotification({ error, variant, productName }) {
  const icon = error ? (
    <HiOutlineXMark className='text-red-800 text-3xl' />
  ) : (
    <FaCheckCircle className='text-green-800 text-5xl mr-4' />
  );

  return (
    <div className='fixed border rounded-lg max-w-2/5 top-10 right-4 z-100 bg-white border-black/20 py-3 px-2 shadow-lg'>
      <div className='flex gap-4 items-center'>
        {error ? (
          <>
            <span className='font-bolder text-red-900 text-lg'>
              Please pick a size!
            </span>
            {icon}
          </>
        ) : (
          <>
            <div>
              <img width={90} src={variant.images[0]} alt='' />
            </div>
            <div className='text-black/70'>
              <h1>{productName}</h1>
              <p className='font-thin'>
                Success: You have added a new product to your{' '}
              </p>
              <Link to={'/cart'}>
                <span className='text-orange-500'>shopping cart</span>
              </Link>
            </div>
            {icon}
          </>
        )}
      </div>
    </div>
  );
}

export default TemporalNotification;
