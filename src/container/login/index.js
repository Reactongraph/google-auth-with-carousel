import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

class LoginComponent extends Component {
  // Handle google login success resposne
  handleSuccess = success => {
    console.log("success", success);
    localStorage.setItem("userToken", success.tokenId);
    this.props.history.push("/landing");
  };

  // Handle google login failure response
  handleFailure = failure => {
    alert("Something went wrong");
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="container">
          <form className="user-form">
            <h3>Sign Up</h3>
            <div className="user-register">
              <GoogleLogin
                clientId="936818949506-h5flgrg4ftdhjbp8o476jamg6e2uisr5.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.handleSuccess}
                onFailure={this.handleFailure}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
