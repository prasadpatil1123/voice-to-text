import React from "react";
import logo from "../assets/Reliance.png"; // put your logo in src/assets

export default function LogoPage() {
  return (
    <div className="center-container">
      <img src={logo} alt="Reliance" className="logo" />
      <h1>Infra Team</h1>
      <p>Welcome to our Speech Processing Tool</p>
    </div>
  );
}
