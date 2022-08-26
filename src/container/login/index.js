import React from "react";
import {useHistory} from 'react-router-dom';
import { GoogleLogin } from "react-google-login";

const LoginComponent = () => {
  const history = useHistory();
  // Handle google login success resposne
  const handleSuccess = success => {
    console.log("success", success);
    localStorage.setItem("userToken", success.tokenId);
    history.push("/landing");
  };

  // Handle google login failure response
  const handleFailure = failure => {
    alert("Something went wrong");
  };

  return (
    <div className="login-wrapper">
        <div className="container">
          <form className="user-form">
            <h3>Sign Up</h3>
            <div className="user-register">
              <GoogleLogin
                clientId="936818949506-h5flgrg4ftdhjbp8o476jamg6e2uisr5.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
              />
            </div>
          </form>
        </div>
      </div>
  )
}

export default LoginComponent