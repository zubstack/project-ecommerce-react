import { NavLink } from "react-router-dom";

let optionsLeft = [
  {
    to: "/",
    text: "All",
    className: "",
  },
  {
    to: "/clothes",
    text: "Clothes",
    className: "",
  },
  {
    to: "/electronics",
    text: "Electronics",
    className: "",
  },
  {
    to: "/furnitures",
    text: "Furnitures",
    className: "",
  },
  {
    to: "/toys",
    text: "Toys",
    className: "",
  },
  {
    to: "/others",
    text: "Others",
    className: "",
  },
];

let optionsRight = [
  {
    to: "/my-orders",
    text: "My orders",
    className: "",
  },
  {
    to: "/my-account",
    text: "My occount",
    className: "",
  },
  {
    to: "/sign-in",
    text: "Sign In",
    className: "",
  },
  {
    to: "/shop-cart",
    text: "🛒",
    className: "",
  },
];

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
  let activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to={"/"}>LOGO</NavItem>
        </li>

        {optionsLeft.map((option) => {
          return (
            <li key={option.text}>
              <NavItem to={option.to} activeStyle={activeStyle}>
                {option.text}
              </NavItem>
            </li>
          );
        })}
      </ul>
      <ul className="flex items-center gap-3">
        <li>example@gmail.com</li>
        {optionsRight.map((option) => {
          return (
            <li key={option.text}>
              <NavItem to={option.to} activeStyle={activeStyle}>
                {option.text}
              </NavItem>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
