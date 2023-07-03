import { useContext, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const { account, setAccount, signOut, setSignOut, parsedAccount } =
    useContext(ShoppingCartContext);
  const [view, setView] = useState("");

  const noAccountinLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;

  const noAccountinLocalState = account
    ? Object.keys(account).length === 0
    : true;

  const hasUserAccount = !noAccountinLocalState || !noAccountinLocalStorage;

  function handleLogIn() {
    localStorage.setItem("sign-out", false);
    setSignOut(false);
    return <Navigate replace to={"/"} />;
  }
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
          value={parsedAccount?.name}
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
            onClick={handleLogIn}
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

  //Form Validation:

  const isEmpty = (arr, form) => {
    for (const key of arr) {
      if (form[key].value == "") {
        return true;
      }
    }

    return false;
  };

  // Form - Collect data:

  const formData = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = formData.current;
    const dataUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    if (isEmpty(["name", "email", "password"], formData.current)) {
      console.log("Error: Something is empty");
    } else {
      setAccount(dataUser);
      setView("");
      localStorage.setItem("account", JSON.stringify(dataUser));

      console.log(account);
      console.log(signOut);
      handleLogIn();
    }
  };

  function renderCreateNewUser() {
    return (
      <form
        ref={formData}
        className="flex flex-col w-80"
        // onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="user-name">User name:</label>
        <input
          placeholder="Marco"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/50 focus:outline-none py-2 px-2 "
          type="text"
          name="name"
          id="user-name"
        />

        <label htmlFor="user-email">Email:</label>
        <input
          placeholder="name@example.com"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/50 focus:outline-none py-2 px-2 "
          type="email"
          name="email"
          id="user-email"
        />

        <label htmlFor="user-password">Create a password:</label>
        <input
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/50 focus:outline-none py-2 px-2 "
          type="password"
          name="password"
          id="user-password"
        />
        <label htmlFor="user-password_confirm">Repeat Password:</label>
        <input
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/50 focus:outline-none py-2 px-2 "
          type="password"
          name="user-password_confirm"
          id="user-password_confirm"
        />

        <button
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-10"
          type="submit"
          onClick={onSubmit}
        >
          {" "}
          <Link to={"/"}>Create new account</Link>
        </button>
      </form>
    );
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
