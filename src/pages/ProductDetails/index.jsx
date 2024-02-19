import endpoints from '../../services/endpoints';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

function ProductsDetails() {
  const [product, setProduct] = useState(null);
  const { id: productId } = useParams();

  async function fetchProduct() {
    try {
      const response = await axios.get(endpoints.getProduct(productId));
      setProduct(response.data);
      return;
    } catch (error) {
      console.error('Error when trying to fetch the product by id', error);
    }
  }
  console.log('product', product);

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) return <NotFound />;

  return (
    <>
      <div className=' w-full container h-[84vh] flex flex-col justify-center'>
        <div className='flex items-center'>
          <div className='flex-col justify-between items-center mb-4 ml-2 px-4 '>
            <p className='card-span text-4xl font-light  tx-title mt-4 mb-8'>
              <span>{product?.name}</span>
            </p>
            <p className='w-[90%]  font-bold font-roboto  mb-4 flex justify-between'>
              {product?.brand}
              <p className='font-rajdhani text-2xl'>$$$</p>
            </p>
            <p className='font-light mb-4 w-[90%]'>{product?.description}</p>
          </div>
          <div className='w-2/5'>
            <figure className='relative mb-4  h-80 border border-black/50 rounded-md'>
              <img
                className='w-full h-full object-cover rounded-lg'
                src={product?.variants[0].images[0]}
                alt='headphone'
              />
            </figure>
            <div className='text-[40px] my-4 flex  justify-between px-4 items-center'>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className='flex justify-center items-center text-center bg-black text-white w-20 py-1 rounded-md'
              >
                <FaCartPlus className='text-xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;

//PENDING: addToShoppingCart(data);
//PENDING: openShoppingAside();
//PENDING: See details button => link
//PENDING: Link to go back
//PENDING: Stars component
//PENDING: Addtional features => array
