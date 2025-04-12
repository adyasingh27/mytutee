import React from "react";
import "./Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form">
        <button className="back-button" onClick={() => navigate("/")}>
          ←
        </button>
        <h2 className="sign-in-title">Sign in</h2>
        <input
          type="email"
          placeholder="Email"
          className="input-field email-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field password-field"
        />
        <a href="/" className="forgot-password">
          Forgot your password?
        </a>
        <button className="sign-in-button">SIGN IN</button>
      </div>
      <div className="signup-section">
        <h2 className="signup-title">Hello, Friend!</h2>
        <p className="signup-text">
          Enter your personal details and start your journey with us.
        </p>
        <button
          className="sign-up-button"
          onClick={() => navigate("/signup")}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;
