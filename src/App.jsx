import { useContext } from 'react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import { ProductProvider } from './context/ProductContext';
import { ShoppingCartProvider } from './context/ShoppingContext';
import Login from './pages/Login';
import { UserContext, UserProvider } from './context/UserContext';
import ProductDetails from './pages/ProductDetails';
import MainLayout from './layout/MainLayout';
import Cart from './pages/Cart';

function AppRoutes() {
  const { user } = useContext(UserContext);
  let routes = useRoutes([
    {
      path: '/',
      element: user ? <Home /> : <Navigate replace to={'/login'} />,
    },
    {
      path: '/cart',
      element: user ? <Cart /> : <Navigate replace to={'/login'} />,
    },
    {
      path: '/:id',
      element: user ? <ProductDetails /> : <Navigate replace to={'/login'} />,
    },
    {
      path: '/account',
      element: user ? <MyAccount /> : <Navigate replace to={'/login'} />,
    },
    {
      path: '/login',
      element: user ? <Navigate replace to={'/'} /> : <Login />,
    },

    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routes;
}
function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Navbar />
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          </BrowserRouter>
        </ShoppingCartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
