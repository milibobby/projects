import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import SocialMediaIcons from "../SocialMediaIcons";
import key_image from "../../assets/images/Illustrationkey.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and password are provided
    if (username && password) {
      navigate("/home"); // Redirect to the HomePage component
    } else {
      // Display an error message or prompt the user to enter both username and password
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section */}
        <div className="left-section">
          <h2>Sign In</h2>

          {/* Create Account Link */}
          <div className="create-account">
            New user?{" "}
            <Link to="/signup" className="sign-up-link">
              Create Account
            </Link>
          </div>

          {/* Sign In Form */}
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  required
                />
              </div>

              {/* Keep Me Signed In */}
              <div className="keep-me-signed">
                <input type="checkbox" id="keepSignedIn" />
                <label htmlFor="keepSignedIn">Keep me signed in</label>
              </div>

              {/* Sign In Button */}
              <div>
                <button type="submit" className="sign-in-button">
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* Horizontal Line and Sign In Options */}
          <div className="horizontal-line">
            <hr className="line-1" />
            <div className="sign-in-options">Or Sign In With</div>
            <hr className="line-2" />
          </div>

          {/* Social Media Icons */}
          <div className="social-media-icons-container">
            <div className="icons-wrapper">
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        {/* Right Section with Key Image */}
        <div className="right-section">
          <img src={key_image} alt="key image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
