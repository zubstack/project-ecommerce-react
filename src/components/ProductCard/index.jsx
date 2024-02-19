import { useNavigate } from 'react-router-dom';
import AddCartButton from '../../ui/AddCartButton';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingContext';

function ProductCard({ data }) {
  const navigate = useNavigate();
  const { addToShoppingCart, openShoppingAside } =
    useContext(ShoppingCartContext);

  function showProductDetails() {
    navigate(`/${data.id}`);
  }

  function handleAddNewProduct(item) {
    addToShoppingCart(item);
    openShoppingAside();
  }
  return (
    <div className='bg-white/10  w-60 border border-black/40 rounded-lg p-2 relative'>
      <figure
        className='relative mb-2 w-full cursor-pointer'
        onClick={showProductDetails}
      >
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.brand}
        </span>
        <img
          className='w-full h-40 object-cover rounded-lg'
          src={data.variants[0].images[0]}
          alt={data.name}
        />
      </figure>
      <div className='flex flex-col text-start'>
        <p className='text-sm font-light tx-title px-1 py-3'>{data.name}</p>
        <p className='tx-price px-2 py-1 rounded-md'>
          $ {data.variants[0].price}
        </p>
        <AddCartButton onClick={() => handleAddNewProduct(data)} />
      </div>
    </div>
  );
}

export default ProductCard;
