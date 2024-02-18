/** @format */

import React from "react";
import LogoImage from "../../assets/logo.png";
const logoStyles = {
  marginRight: "10px",
};
export default function Logo() {
  return <img src={LogoImage} alt="QTify Logo" width={65} style={logoStyles} />;
}
