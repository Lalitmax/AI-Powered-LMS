"use client";

import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "@/css/login.css";

const SignupPage: React.FC = () => {
  const [message, setMessage] = useState("");

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="wrapper-container">
      <div className="wrapper w3-animate-zoom">
        <div className="form-box register">
          <h2>Registration</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showMessage("REGISTER SUCCESSFUL");
            }}
          >
            <div className="input-box">
              <span className="icon">
                <i className="bx bx-user-circle"></i>
              </span>
              <input type="text" required placeholder="Enter Username" />
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bx-mail-send"></i>
              </span>
              <input type="email" required placeholder="Enter Email" />
            </div>
            <div className="input-box">
              <span className="icon">
                <i className="bx bx-lock"></i>
              </span>
              <input type="password" required placeholder="Password" />
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <div>
              <button type="submit" className="sbtm">
                Register
              </button>
              {message && <div id="click">{message}</div>}
            </div>
            <div className="login-register">
              <p>
                Already have an account?
                <a href="/login" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
