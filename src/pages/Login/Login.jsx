import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function handleCallbackResponse(response) {
    setUser(jwt_decode(response.credential));
    navigate("/");
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
//PENDING: Remember user after refresh
