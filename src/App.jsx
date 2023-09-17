import { useContext } from "react";
import { ShoppingCartContext, ShoppingCartProvider } from "./context";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import OrderView from "./pages/OrderView";
import "./App.css";
import Specifications from "./pages/Specifications";

function AppRoutes() {
  const { isUserSignOut } = useContext(ShoppingCartContext);
  let routes = useRoutes([
    {
      path: "/",
      element: !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/category/:category",
      element: !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/spefications/:id",
      element: !isUserSignOut ? (
        <Specifications />
      ) : (
        <Navigate replace to={"/sign-in"} />
      ),
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders/last",
      element: <OrderView />,
    },
    {
      path: "/my-orders/:id",
      element: <OrderView />,
    },
    {
      path: "/my-order",
      element: <OrderView />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-out",
      element: <SignOut />,
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
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
