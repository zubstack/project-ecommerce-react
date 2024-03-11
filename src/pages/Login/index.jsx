import jwt_decode from 'jwt-decode';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    setUser(jwt_decode(response.credential));
    navigate('/');
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_ID,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);
  return (
    <div className='flex justify-center py-20'>
      <div className='m-auto px-6 py-10 text-center border border-black/20 shadow-md'>
        <h2>Please, login with Google</h2>
        <div id='signInDiv' className='p-8'></div>
      </div>
    </div>
  );
}

export default Login;

//PENDING: Login layout
//PENDING: Remember user after refresh
