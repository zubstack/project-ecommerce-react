import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
  const { parsedAccount } = useContext(ShoppingCartContext);
  let passwordDotted = "";
  for (let i = 0; i < parsedAccount?.password.length; i++) {
    passwordDotted += "*";
  }

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
      <button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3">
        Edit
      </button>
    </div>
  );
}

export default MyAccount;
