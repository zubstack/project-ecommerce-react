import { useContext, useRef, useState } from "react";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
  const { setAccount, account, parsedAccount } =
    useContext(ShoppingCartContext);
  let passwordDotted = "";
  for (let i = 0; i < parsedAccount?.password.length; i++) {
    passwordDotted += "*";
  }

  //View State:
  const [view, setView] = useState("");

  function renderUserInfo() {
    return (
      <div className="flex flex-col w-80">
        <h1 className="font-medium text-xl text-center">My account</h1>
        <div className="py-2 mt-5">
          <span className="font-bold p-2">Name: </span>
          <span className="">{parsedAccount.name}</span>
        </div>
        <div className="py-2 ">
          <span className="font-bold p-2">Password: </span>
          <span className="text-dotted">{passwordDotted}</span>
        </div>
        <button
          onClick={() => setView("edit-user-info")}
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
        >
          Edit
        </button>
      </div>
    );
  }

  //Form Validation

  const isEmpty = (arr, form) => {
    for (const key of arr) {
      if (form[key].value == "") {
        return true;
      }
    }

    return false;
  };

  //Form Submit
  const formData = useRef();

  const handleSubmit = (event) => {
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
    }
  };

  function renderEditUserInfo() {
    return (
      <form
        ref={formData}
        className="flex flex-col w-80"
        onSubmit={(event) => handleSubmit(event)}
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
        >
          Create new account
        </button>
      </form>
    );
  }

  function renderView() {
    return view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();
  }
  return renderView();
}

export default MyAccount;
