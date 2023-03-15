import React from "react";
import css from "../hero/Hero.module.css";
import landing from "../../assets/LandingPageMain.svg";

export const Hero = () => {
  return (
    <div className={css.home}>
      <div className={css.left}>
        <h1>We got you!</h1>
        <p>Join a community that cares about your mental health</p>
        <p>A single message can go a long way</p>
        <button className={css.consult}>Consult a Volunteer</button>
      </div>
      <div className={css.right}>
        <div className={css.landing}>
          <img src={landing} alt="landingpage"></img>
        </div>
      </div>
    </div>
  );
};
