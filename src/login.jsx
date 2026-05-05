import React from "react";
import "./login.css"; // your Tailwind @apply file

const Login = () => {
  return (
    <div className="main-container">
      
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="logo-box">
          <h1>Logo</h1>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="login-card">
          
          <h2>Sign In</h2>
          <p>Please login to continue</p>

          {/* EMAIL */}
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />

          {/* PASSWORD */}
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          {/* OPTIONS */}
          <div className="options">
            <div className="check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="link">Forgot Password?</span>
          </div>

          {/* BUTTON */}
          <button className="signin-btn">Sign In</button>

          {/* BOTTOM TEXT */}
          <div className="bottom-text">
            <span>Don't have an account?</span>
            <span> <a href="/signup" className="link"></a>Sign up</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;