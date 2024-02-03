import React, { useState } from "react";
import AboutAuth from "./AboutAuth";
import "./Auth.css";
import icon from "../../assets/logo.png";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form>
          {isSignup && (
            <label label htmlFor="name">
              <h4>Display name</h4>
              <input type="text" id="name" name="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email"></input>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "14px" }}>
                  Forgot Password
                </p>
              )}
            </div>
            <input type="password" name="password" id="password"></input>
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "14px" }}>
                Passwords must contain at least eight
                <br /> characters, including at least 1 character and 1 <br />{" "}
                number
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check"></input>
              <p style={{ fontSize: "14px" }}>
                Opt-in to receive occasional
                <br /> product updates, user research invitations,
                <br /> company announcements, and digests
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Login"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking on "Sign up", you agree to the{" "}
              <span style={{ color: "#007ac6" }}>terms of service,</span>
              <br />
              <span style={{ color: "#007ac6" }}>privacy policy</span> and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
