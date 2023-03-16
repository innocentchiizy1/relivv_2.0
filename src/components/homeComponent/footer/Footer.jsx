import React from "react";
import css from "../footer/Footer.module.css";
import logo from "../../../assets/logo.png";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className={css.main}>
        <h4>Copyright &#169; 2023||relivv</h4>
        <div>
          <ul className={css.list}>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaGoogle />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <img src={logo} alt="" className={css.logo}></img>
      </div>
    </div>
  );
};
