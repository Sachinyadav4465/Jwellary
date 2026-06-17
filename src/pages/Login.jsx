import React from "react";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">
          Sign in to your AETERNITAS account
        </p>

        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;