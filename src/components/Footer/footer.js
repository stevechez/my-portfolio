import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>
      <a href="/personal-website-react" target="_blank">
        Github
      </a>
    </p>
  </div>
);
Footer.propTypes = {
  footerClass: PropTypes.string,
};
export default Footer;
