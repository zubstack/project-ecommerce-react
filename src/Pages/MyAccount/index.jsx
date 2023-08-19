import { useContext, useRef, useState } from "react";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
  const { setAccount, account } = useContext(ShoppingCartContext);

  //Dotted password:
  //PENDING: See the password functionality
  let passwordDotted = "";
  for (let i = 0; i < account?.password.length; i++) {
    passwordDotted += "*";
  }

  //View: [user info] - [edit password] ============================

  const [view, setView] = useState("");

  //User Info:
  function renderUserInfo() {
    return (
      <div className="flex flex-col w-80">
        <h1 className="font-medium text-xl text-center">My account</h1>
        <div className="py-2 mt-5">
          <span className="font-bold p-2">Name: </span>
          <span className="">{account.name}</span>
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

  // Edit Password:

  const formData = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = formData.current.password;
    console.log("account", account);
    if (isEmpty(["password", "confirm"], formData.current)) {
      //PENDING: User alert
      alert("Error: Something is empty");
    } else {
      setAccount({ ...account, password: value });
      setView("");
      localStorage.setItem(
        "account",
        JSON.stringify({ ...account, password: value })
      );
    }
  };

  function renderEditUserInfo() {
    return (
      <>
        <h1 className="text-2xl mb-10 mt-10">Edit your password</h1>
        <form
          ref={formData}
          className="flex flex-col w-80"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label htmlFor="user-password">Write the new password:</label>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/50 focus:outline-none py-2 px-2 "
            type="password"
            name="password"
          />
          <label htmlFor="user-password_confirm">Repeat Password:</label>
          <input
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/50 focus:outline-none py-2 px-2 "
            type="password"
            name="confirm"
          />

          <button
            className="bg-black/90 disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-10 hover:bg-black"
            type="submit"
          >
            Save changes
          </button>
        </form>
      </>
    );
  }

  // Validation :

  function isEmpty(arr, form) {
    for (const key of arr) {
      if (form[key].value == "") {
        return true;
      }
    }

    return false;
  }

  function renderView() {
    return view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();
  }
  return renderView();
}

export default MyAccount;
