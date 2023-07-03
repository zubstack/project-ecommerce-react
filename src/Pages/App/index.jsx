import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context";
import { useContext } from "react";

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
