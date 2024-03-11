import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function DropdownUser({ user, setUser }) {
  function handleSignOut() {
    setUser(null);
  }

  return (
    <Menu as='div' className='ml-3 relative'>
      <div>
        <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
          <span className='sr-only'>Open user menu</span>
          <img
            className='w-8 h-8 rounded-full'
            src={user?.picture}
            alt='user photo'
          ></img>{' '}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='flex flex-col origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <Menu.Item className='px-3 py-2'>
            {({ active }) => (
              <NavLink className={`${active && 'bg-blue-500'}`} to='/account'>
                Account
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item className='px-3 py-2'>
            {({ active }) => (
              <NavLink className={`${active && 'bg-blue-500'}`} to='/'>
                My orders
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item className='px-3 py-2'>
            {({ active }) => (
              <NavLink
                className={`${active && 'bg-blue-500'}`}
                to='/login'
                onClick={handleSignOut}
              >
                Sign out
              </NavLink>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownUser;
