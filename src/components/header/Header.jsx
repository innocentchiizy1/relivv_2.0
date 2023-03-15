import React from "react";
import css from "../header/Header.module.css";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className={css.home}>
      <div className={css.left}>
        <div className={css.logo}>
          <img src={Logo} alt="logo"></img>
        </div>
        <div className={css.nav}>
          <ul className={css.nav}>
            <li>Book a Session</li>
            <li>Health Tips</li>
            <li>Library</li>
          </ul>
        </div>
      </div>
      <div className={css.right}>
        <div>
          <ul className={css.button}>
            <li className={css.login}>Login</li>
            <li className={css.register}>Register</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
