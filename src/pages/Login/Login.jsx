import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

function Login() {
  const { setUser, user } = useContext(UserContext);
  console.log("user", user);
  function handleCallbackResponse(response) {
    setUser(jwt_decode(response.credential));
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "285011231409-khihnnevflb1tcpsbc76v30i35drh9q0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
}

export default Login;

//PENDING: Login layout
