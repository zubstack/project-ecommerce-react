import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function UserAccount() {
  const { user } = useContext(UserContext);

  return (
    <div className='flex flex-col'>
      <h1 className='font-medium text-xl'>My account</h1>
      <div className='py-2 mt-5'>
        <span className='font-bold p-2'>Name: </span>
        <span className=''>{user?.name}</span>
      </div>
      <div className='py-2 '>
        <span className='font-bold p-2'>Email: </span>
        <span className='text-dotted'>{user?.email}</span>
      </div>
    </div>
  );
}

export default UserAccount;

//PENDING: Improve account page
