import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/ShoppingContext';
// import { ProductContext } from '../../context/ProductContext';
import { FaShoppingCart } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';
import DropdownUser from '../../ui/DropdownUser';
import storeLogo from '../../assets/basketballstore-205x74.png';

function NavbarTop() {
  const { user, setUser } = useContext(UserContext);
  // const { updateProducts } = useContext(ProductContext);
  const { shoppingCounter } = useContext(ShoppingCartContext);

  return (
    <div className='flex shadow-md justify-between items-center px-10 pt-2'>
      <div className='mb-6'>
        <NavLink to={'/'}>
          <img src={storeLogo} alt='logo' height={74} width={205} />
        </NavLink>
      </div>

      <div className='mx-16 flex-1 h-[100%]'>
        <input
          className='flex-grow-1 rounded-sm border border-black/50 w-full py-2 px-3 focus:outline-none placeholder-black/80 text-[14px]'
          type='text'
          placeholder='Search...'
          // onChange={(event) => {
          //   updateProducts(event.target.value);
          // }}
        />
      </div>

      <div className='flex items-center gap-3'>
        <NavLink to={'/cart'}>
          <div className='flex items-center gap-3 p-3 rounded-lg text-white text-sm'>
            <span>{`${shoppingCounter} ITEM(S) - $0`}</span>
            <FaShoppingCart className='text-xl' />
          </div>
        </NavLink>
        {user && <DropdownUser user={user} setUser={setUser} />}
      </div>
    </div>
  );
}

export default NavbarTop;
