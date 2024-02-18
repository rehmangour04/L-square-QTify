/** @format */

import React from "react";
import LogoImage from "../../assets/logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <img src={LogoImage} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
