import React from "react";
import SocialMediaIcons from "../SocialMediaIcons";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="icons">
          {/* Render the SocialMediaIcons component */}
          <SocialMediaIcons />
        </div>
        <p>Example@email.com</p>
        <p>Copyright &copy; 2020 Name. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
