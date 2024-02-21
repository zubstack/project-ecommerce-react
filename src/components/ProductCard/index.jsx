import './style.css';
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
    <div className='w-60 border border-black/10 rounded-lg p-2 relative hover:shadow-lg'>
      <figure
        className='relative mb-2 w-full cursor-pointer'
        onClick={showProductDetails}
      >
        <img
          className='w-full object-cover rounded-lg'
          src={data.variants[0].images[0]}
          alt={data.name}
        />
      </figure>
      <div className='flex flex-col text-center font-bold text-black/80 gap-2 justify-between'>
        <div>
          <p className=''>{data.brand}</p>
          <p className='tx-normal text-xl'>{data.name}</p>
          <p className='tx-normal mb-16'>$ {data.variants[0].price}</p>
        </div>
        <AddCartButton
          className='cart__button flex flex-1 justify-center items-center text-center text-xs bg-black/80  w-30 p-2  text-white  rounded-sm'
          onClick={() => handleAddNewProduct(data)}
        >
          ADD TO CART
        </AddCartButton>
      </div>
    </div>
  );
}

export default ProductCard;
