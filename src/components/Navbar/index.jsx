import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import "./styles.css";
import { ProductContext } from "../../context/ProductContext";
import { FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";
import Dropdown from "../DropDown";

// eslint-disable-next-line react/prop-types

function Navbar() {
  const { user } = useContext(UserContext);
  const { updateProducts } = useContext(ProductContext);
  const { shoppingCounter } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  function handleSignOut() {
    //PENDING: Sign out logic
    navigate("/login");
  }

  function renderView() {
    if (!user) {
      return;
    }
  }
  return (
    <>
      <nav className="flex shadow-md justify-between items-center fixed top-0 z-10 w-full py-2 px-8 text-sm bg-white nav-text">
        <ul className="flex items-center gap-8">
          <li className="font-semibold text-lg">
            <NavLink to={"/"}>TECH SHOP</NavLink>
          </li>

          {user && (
            <input
              className="rounded-lg border border-black/50 w-[350px] py-2 px-3 focus:outline-none"
              type="text"
              placeholder="Search a product"
              onChange={(event) => {
                updateProducts(event.target.value);
              }}
            />
          )}
        </ul>
        <ul className="flex items-center gap-3">
          {!user ? "" : <li className="text-black/60">{user?.email}</li>}
          {renderView()}
          {user && (
            <li>
              <NavLink to={"/cart"}>
                <div className="flex items-center gap-1 bg-black/90 p-3 rounded-lg text-white text-sm hover:bg-black">
                  <FaShoppingCart />

                  <span className="ml-2">{`Cart · ${shoppingCounter}`}</span>
                </div>
              </NavLink>
            </li>
          )}
          {user ? (
            <Dropdown user={user} />
          ) : (
            <li>
              <NavLink to={"/login"} onClick={() => handleSignOut()}>
                {!user ? "Sign In" : "Sign Out"}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

//PENDING:Login =>> Home redirect
