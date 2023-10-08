import React from "react";
import "../../src/components/styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <FontAwesomeIcon icon={faGoogle} className="google-icon" />
      <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
      <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
      <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
    </div>
  );
};

export default SocialMediaIcons;
