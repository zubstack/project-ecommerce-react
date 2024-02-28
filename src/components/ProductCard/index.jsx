import './style.css';
import { Link } from 'react-router-dom';
import AddCartButton from '../../ui/AddCartButton';
// import { useContext } from 'react';
// import { ShoppingCartContext } from '../../context/ShoppingContext';

function ProductCard({ data }) {
  // const navigate = useNavigate();
  // const { addToShoppingCart, openShoppingAside } =
  // useContext(ShoppingCartContext);

  // function showProductDetails() {
  //   navigate(`/${data.id}`);
  // }

  // function handleAddNewProduct(item) {
  //   addToShoppingCart(item);
  //   openShoppingAside();
  // }
  return (
    <div className='w-60 border border-black/10 rounded-lg p-2 relative hover:shadow-xl'>
      <div className="className='relative mb-2 w-full cursor-pointer'">
        <Link to={`/${data.id}`}>
          <img
            className='w-full object-cover rounded-lg'
            src={data.variants[0].images[0]}
            alt={data.name}
          />
        </Link>
      </div>
      <div className='flex flex-col text-center font-bold text-black/80 gap-2 justify-between'>
        <div>
          <p className='text-sm text-black/70'>{data.brand}</p>
          <div className='tx-normal text-xl mb-4 cursor-pointer'>
            <Link to={`/${data.id}`}>{data.name}</Link>
          </div>
          <p className='tx-normal mb-10'>$ {data.variants[0].price}</p>
        </div>
        <Link to={`/${data.id}`}>
          <AddCartButton
            className='cart__button flex flex-1 justify-center items-center w-30 p-2 text-white rounded-sm text-center text-xs bg-black/80 hover:bg-orange-400 duration-150'
            // onClick={() => handleAddNewProduct(data)}
          >
            ADD TO CART
          </AddCartButton>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
