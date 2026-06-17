import React from "react";
import { Link } from "react-router-dom";


function Signup() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">

        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">
          Join the world of timeless luxury
        </p>

        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-input"
          />

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;