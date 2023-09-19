import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import "./styles.css";
import { ProductContext } from "../../context/ProductContext";
import { FaShoppingCart } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";

let optionsRight = [
  {
    to: "/my-orders",
    text: "My orders",
    className: "",
  },
  {
    to: "/my-account",
    text: "My account",
    className: "",
  },
];

// eslint-disable-next-line react/prop-types
function NavItem({ to, children, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  const { user } = useContext(UserContext);
  const { updateProducts } = useContext(ProductContext);
  const { shoppingCounter } = useContext(ShoppingCartContext);

  const navigate = useNavigate();
  let activeStyle = "underline underline-offset-4";

  function handleSignOut() {
    //PENDING: Sign out logic
    navigate("/login");
  }

  function renderView() {
    if (!user) {
      return;
    }

    return optionsRight.map((option) => {
      return (
        <li key={option.text}>
          <NavItem to={option.to} activeStyle={activeStyle}>
            {option.text}
          </NavItem>
        </li>
      );
    });
  }
  return (
    <nav className="flex shadow-md justify-between items-center fixed top-0 z-10 w-full py-2 px-8 text-sm bg-white nav-text">
      <ul className="flex items-center gap-8">
        <li className="font-semibold text-lg">
          <NavItem to={"/"}>TECH SHOP</NavItem>
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
        <li>
          <NavLink to={"/login"} onClick={() => handleSignOut()}>
            {!user ? "Sign In" : "Sign Out"}
          </NavLink>
        </li>
        {user && (
          <li>
            <NavItem to={"/cart"}>
              <div className="flex items-center gap-1 bg-black/90 p-3 rounded-lg text-white text-sm hover:bg-black">
                <FaShoppingCart />

                <span className="ml-2">{`Cart · ${shoppingCounter}`}</span>
              </div>
            </NavItem>
          </li>
        )}
        {/* <li>
          <figure>
            <img src={user?.picture} alt="" />
            <p>{user?.name}</p>
          </figure>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

//PENDING:Login =>> Home redirect
