// import { useContext } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';
import './App.css';
import { ShoppingCartProvider } from './context/ShoppingContext';
import Login from './pages/Login';
import { UserProvider } from './context/UserContext';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <ShoppingCartProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider>
    </UserProvider>
  );
}

export default App;
