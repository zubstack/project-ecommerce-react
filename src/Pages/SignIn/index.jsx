import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      <div className="flex flex-col w-80">
        <label className="py-2" htmlFor="user-name">
          User:{" "}
        </label>
        <input className="p-1" type="text" name="user-nam" />
        <label className="py-2" htmlFor="user-password">
          Password:{" "}
        </label>
        <input className="p-1" type="password" name="user-password" />
        <Link to="/">
          {" "}
          <button className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
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
        <button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3">
          {" "}
          Sing Up
        </button>
      </div>
    </>
  );
}

export default SignIn;
