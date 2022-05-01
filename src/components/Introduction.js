import React from "react";
import logo from "../images/foto-perfil.jpg";
import email_icon from "../images/Mail.png";
import linkedin_icon from "../images/linkedin.svg";

export default function Introduction() {
  return (
    <>
      <img className ="logo" src={logo} />
      <div className =" content intrd">
        <h1>Valeria Hidalgo C</h1>
        <h4>Frontend Developer</h4>
        <p>valeriahidalgo50@gmail.com</p>
        <div className="intrd-buttons ">
          <div className="button">
            <img src={email_icon} />
            <h3>Email </h3>
          </div>
          <div className="button">
            <img src={linkedin_icon} />
            <h3>LinkedIn </h3>
          </div>
        </div>
      </div>
    </>
  );
}
