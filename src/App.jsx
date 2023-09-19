import { useContext } from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import OrderView from "./pages/OrderView";
import "./App.css";
import Specifications from "./pages/Specifications";
import { ProductProvider } from "./context/ProductContext";
import { ShoppingCartProvider } from "./context/ShoppingContext";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import { UserContext, UserProvider } from "./context/UserContext";

function AppRoutes() {
  const { user } = useContext(UserContext);
  console.log("user", user);
  let routes = useRoutes([
    {
      path: "/",
      element: user ? <Home /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/cart",
      element: user ? <Cart /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/spefications/:id",
      element: user ? <Specifications /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/account",
      element: user ? <MyAccount /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/my-orders/last",
      element: user ? <OrderView /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/my-orders/:id",
      element: user ? <OrderView /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/my-order",
      element: user ? <OrderView /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/my-orders",
      element: user ? <MyOrders /> : <Navigate replace to={"/login"} />,
    },
    {
      path: "/login",
      element: user ? <Navigate replace to={"/"} /> : <Login />,
    },

    {
      path: "/*",
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
            <Layout>
              <AppRoutes />
            </Layout>
          </BrowserRouter>
        </ShoppingCartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
