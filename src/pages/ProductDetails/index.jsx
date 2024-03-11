import endpoints from '../../services/endpoints';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import AddCartButton from '../../ui/AddCartButton';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import TemporalNotification from '../../ui/TemporalNotification';

const avaibleSizes = [
  '  39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
  '49',
  '50',
];

function ProductsDetails() {
  const { addToShoppingCart } = useContext(ShoppingCartContext);
  const [product, setProduct] = useState(null);
  const [productVariant, setProductVariant] = useState(null);
  const [selectedProductSize, setSelectedProductSize] = useState(null);
  const [notificationState, setNotificationState] = useState({
    isOpen: false,
    error: false,
  });
  const { id: productId } = useParams();

  async function fetchProduct() {
    try {
      const response = await axios.get(endpoints.getProduct(productId));
      setProduct(response.data);
      setProductVariant(response.data.variants[0]);
      return;
    } catch (error) {
      console.error('Error when trying to fetch the product by id', error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  function handleResetSize() {
    setSelectedProductSize(null);
  }

  function handleSizeSelection(size, avaible) {
    if (!avaible) return;
    setSelectedProductSize(size);
  }

  function handleChangeProductVariant(item) {
    setProductVariant(item);
    setSelectedProductSize(null);
  }

  function handleAddProductToShoppingCart() {
    const isOrderReady = selectedProductSize !== null;
    setNotificationState({
      ...notificationState,
      isOpen: true,
      error: !isOrderReady,
    });
    if (isOrderReady) {
      const { brand, name, id } = product;
      const { images, price } = productVariant;
      addToShoppingCart({
        brand,
        id,
        name,
        images,
        price,
        selectedProductSize,
      });
    }

    setTimeout(() => {
      setNotificationState({ ...notificationState, isOpen: false });
    }, 3000);
  }

  function renderNotification() {
    if (notificationState.isOpen)
      return (
        <TemporalNotification
          variant={productVariant}
          productName={product.name}
          error={notificationState.error}
        />
      );
  }

  if (!product) return <NotFound />;

  return (
    <>
      {renderNotification()}
      <div className='w-[94vw] m-auto '>
        <div className='flex gap-4 mt-8 mb-6 text-black/80'>
          <div className='min-w-[640px]'>
            <figure className='h-100 border border-black/10'>
              <img
                className='w-full h-full object-cover rounded-lg'
                src={productVariant.images[0]}
                alt='headphone'
              />
            </figure>
          </div>
          <div className='w-full flex-col justify-between items-center'>
            <h4 className='card-span text-3xl font-bold tx-normal capitalize mb-8 '>
              <span>
                {product.brand} {product.name}
              </span>
            </h4>
            <Specifications
              title={'INTERNATIONAL SHIPMENT'}
              description={'This product is shipped throughout Europe'}
            />
            <Specifications
              title={'PAY IN 3 INSTALLMENTS WITHOUT INTEREST'}
              description={
                'When paying, choose Credit Card and then select Klarna to quickly install your payment.'
              }
            />
            <div className='flex  border-t-2 border-b-2 align-center p-2 mb-4'>
              <p className='border-r-2 text-3xl font-extrabold pr-6'>$ 75</p>
              <div className='flex-1 text-sm pl-8 font-thin'>
                <p className='text-green-800 text-xs font-bold'>IN STOCK</p>
                <p>Model: DM0825</p>
              </div>
              <img
                className='border p-1'
                src='https://static.basketballstore.net/image/cache/catalog/basketball%20store/brands/logo-rigorer-60x60.jpg'
                alt='brand_img'
              />
            </div>
            <div className='mb-4'>
              <h5 className='mb-2'>Style</h5>
              <div className='flex gap-4'>
                {/* <p>{item.variant_name}</p> */}
                {product.variants.map((item) => {
                  const selected =
                    item.variant_name === productVariant.variant_name;
                  return (
                    <div
                      className='w-28 relative group cursor-pointer -z-10'
                      key={item.variant_name}
                    >
                      <img
                        src={item.images[0]}
                        alt='img'
                        // width={100}
                        className={`border border-black/10 hover:border-black/80 ${
                          selected ? 'bg-orange-500' : ''
                        }`}
                        onClick={() => handleChangeProductVariant(item)}
                      />
                      <div className='opacity-0 group-hover:opacity-100 duration-200 absolute left-[-60px] top-[-28px]  z-10 flex justify-center items-end text-sm bg-orange-400 text-white font-thin capitalize w-60'>
                        {item.variant_name} {product.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='mb-6'>
              <h5 className='mb-2'>Size</h5>
              <div className='flex gap-2'>
                {/* <p>{item.variant_name}</p> */}
                {avaibleSizes.map((size) => {
                  const avaible = productVariant.size.includes(size);
                  const selected = selectedProductSize == size;
                  return (
                    <div
                      className='cursor-pointer'
                      key={size}
                      onClick={() => handleSizeSelection(size, avaible)}
                    >
                      <p
                        className={`py-2 px-3 border ${
                          avaible ? 'text-black' : 'text-black/20'
                        } ${selected ? 'bg-orange-400 text-white' : ''}`}
                      >
                        {size}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button
                className='font-thin text-orange-500 hover:underline'
                onClick={handleResetSize}
              >
                Reset size
              </button>
            </div>
            <div>
              <AddCartButton
                className='uppercase bg-orange-500 text-white w-full font-thin text-sm px-2 py-3'
                onClick={() => handleAddProductToShoppingCart()}
              >
                Add to cart
              </AddCartButton>
            </div>
          </div>
        </div>
        <ProductDescription item={product} />
      </div>
    </>
  );
}

function Specifications({ title, description }) {
  return (
    <div className='p-3 mb-4 bg-teal-100'>
      <div className='px-8 '>
        <h4 className='text-sm'>{title}</h4>
        <p className='font-light text-xs'>{description}</p>
      </div>
    </div>
  );
}
function ProductDescription({ item }) {
  return (
    <div className='bg-gray-100 py-5 px-4 mb-12'>
      <div className='mb-4'>
        <div className='text-black/90 w-[9%] mb-4'>
          <h4 className='mb-1 text-[0.95rem]'>DESCRIPTION</h4>
          <hr className='border-orange-500' />
        </div>
        <p className='text-[0.90rem] font-thin'>
          {item.description !== 'empty' ? item.description : ''}
        </p>
      </div>
      <h4 className='mb-2'>PRODUCT DETAILS</h4>
      <ul className='pl-10'>
        {item?.details.map((detail) => (
          <li className='text-[0.90rem] font-thin list-disc' key={detail}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsDetails;

//PENDING: See details button => link
//PENDING: Link to go back
//PENDING: Stars component
//PENDING: Addtional features => array
