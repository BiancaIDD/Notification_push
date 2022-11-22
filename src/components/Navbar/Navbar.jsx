import React from "react";
import logo from "../../assets/logo.png";
import send from "../../assets/iconSend.png";
import "./Navbar.css";
import dash from "../../assets/dashboard.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Navbar = () => {
  return (
    <div className="Navbar__body">
      <div className="Navbar__tittle">
        <img src={logo} className="Navbar__logo" />
        <h1>LarnU</h1>
      </div>
      <div className="Navbar__Buttons">
        <button className="Navbar__Button">
          <img src={dash} className="Navbar__icons" /> Dashboard
        </button>
        <button className="Navbar__Button">
          <img src={send} className="Navbar__icons" /> Notification
        </button>
      </div>
      <div className="Navbar__Button_out">
      <ArrowBackIosNewIcon className="arrow" />
        <button className="Navbar__button_logout">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
