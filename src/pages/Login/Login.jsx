import jwt_decode from "jwt-decode";
import { useEffect } from "react";

function Login() {
  function handleCallbackResponse(response) {
    console.log("JWT ", jwt_decode(response.credential));
    // console.log("JWT ", response.credential);
  }
  useEffect(() => {
    /*global google*/
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
