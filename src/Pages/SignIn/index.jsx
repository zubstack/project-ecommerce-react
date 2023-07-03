import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const { account, view, setView } = useContext(ShoppingCartContext);
  const parsedAccount = JSON.parse(localStorage.getItem("account"));
  //If parsedAccount exists, it checks if it is an empty object by comparing the length of its keys to 0 using Object.keys(parsedAccount).length === 0.
  //If parsedAccount does not exist, it sets noAccountinLocalStorage to true.
  const noAccountinLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  //If account exists, it checks if it is an empty object by comparing the length of its keys to 0 using Object.keys(account).length === 0.
  //If account does not exist, it sets noAccountinLocalState to true.
  const noAccountinLocalState = account
    ? Object.keys(account).length === 0
    : true;

  const hasUserAccount = !noAccountinLocalState || !noAccountinLocalStorage;
  function renderLogIn() {
    return (
      <div className="flex flex-col w-80">
        <label className="py-2" htmlFor="user-name">
          User:{" "}
        </label>
        <input
          className="p-1"
          type="text"
          name="user-name"
          value={parsedAccount?.user}
        />
        <label className="py-2" htmlFor="user-password">
          Password:{" "}
        </label>
        <input
          className="p-1"
          type="password"
          name="user-password"
          value={parsedAccount?.password}
        />
        <Link to="/">
          {" "}
          <button
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
            disabled={!hasUserAccount}
          >
            Log In
          </button>
        </Link>
        <div className="text-center ">
          <a
            className="font-light text-xs underline underline-offset-4 "
            href="/"
          >
            Forgot my password
          </a>
        </div>
        <button
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
          disabled={hasUserAccount}
          onClick={() => setView("create-user-info")}
        >
          {" "}
          Sing Up
        </button>
      </div>
    );
  }

  function renderCreateNewUser() {
    return <h1>Create a new user!</h1>;
  }

  function renderView() {
    return view === "create-user-info" ? renderCreateNewUser() : renderLogIn();
  }
  return (
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </>
  );
}

export default SignIn;
