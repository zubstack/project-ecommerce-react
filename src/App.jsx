import { useContext } from "react";
import { ShoppingCartContext, ShoppingCartProvider } from "./Context";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";

function AppRoutes() {
  const { isUserSignOut } = useContext(ShoppingCartContext);
  let routes = useRoutes([
    {
      path: "/",
      element: !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },
    {
      path: "/:category",
      element: !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />,
    },

    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
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
