// import { useContext } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import { ProductProvider } from './context/ProductContext';
import { ShoppingCartProvider } from './context/ShoppingContext';
import Login from './pages/Login';
import { UserProvider } from './context/UserContext';
import ProductDetails from './pages/ProductDetails';
import MainLayout from './layout/MainLayout';
import Cart from './pages/Cart';

function AppRoutes() {
  // const { user } = useContext(UserContext);
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/:id',
      element: <ProductDetails />,
    },
    {
      path: '/account',
      element: <MyAccount />,
    },
    {
      path: '/login',
      element: <Login />,
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
