import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import { ProductContext } from '../../context/ProductContext';
import { FaShoppingCart } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';
import DropdownUser from '../../ui/DropdownUser';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const { updateProducts } = useContext(ProductContext);
  const { shoppingCounter } = useContext(ShoppingCartContext);

  return (
    <>
      <nav className='flex shadow-md justify-between items-center fixed top-0 z-10 w-full py-2 px-8 text-sm bg-white nav-text'>
        <div className='flex items-center gap-8'>
          <div className='font-semibold text-lg'>
            <NavLink to={'/'}>TECH SHOP</NavLink>
          </div>

          {user && (
            <input
              className='rounded-lg border border-black/50 w-[350px] py-2 px-3 focus:outline-none'
              type='text'
              placeholder='Search a product'
              onChange={(event) => {
                updateProducts(event.target.value);
              }}
            />
          )}
        </div>

        {user && (
          <ul className='flex items-center gap-3'>
            <li className='text-black/60'>{user?.email}</li>
            <li>
              <NavLink to={'/cart'}>
                <div className='flex items-center gap-1 bg-black/90 p-3 rounded-lg text-white text-sm hover:bg-black'>
                  <FaShoppingCart />

                  <span className='ml-2'>{`Cart · ${shoppingCounter}`}</span>
                </div>
              </NavLink>
            </li>
            <DropdownUser user={user} setUser={setUser} />
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
