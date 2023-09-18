import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingContext";
import "./styles.css";
import { ProductContext } from "../../context/ProductContext";
import { FaShoppingCart } from "react-icons/fa";

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
  const { updateProducts } = useContext(ProductContext);
  const { shoppingCounter } = useContext(ShoppingCartContext);

  const { setSignOut, parsedSignOut, isUserSignOut, account } =
    useContext(ShoppingCartContext);
  let activeStyle = "underline underline-offset-4";

  function handleSignOut() {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    setSignOut(true);
  }

  function renderView() {
    if (isUserSignOut) {
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

        <input
          className="rounded-lg border border-black/50 w-[350px] py-2 px-3 focus:outline-none"
          type="text"
          placeholder="Search a product"
          onChange={(event) => {
            updateProducts(event.target.value);
          }}
        />
      </ul>
      <ul className="flex items-center gap-3">
        {isUserSignOut ? (
          ""
        ) : (
          <li className="text-black/60">{account?.email}</li>
        )}
        {renderView()}
        <li>
          <NavLink
            to={"/sign-in"}
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            {parsedSignOut ? "Sign In" : "Sign Out"}
          </NavLink>
        </li>
        <li>
          <NavItem to={"/cart"}>
            {/* <ShoppingCart /> */}
            <div className="flex items-center gap-1 bg-black/90 p-3 rounded-lg text-white text-sm hover:bg-black">
              <FaShoppingCart />

              <span className="ml-2">{`Cart · ${shoppingCounter}`}</span>
            </div>
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}

//PENDING: "Sign in" avaible to modify the account in Local Storage

export default Navbar;
