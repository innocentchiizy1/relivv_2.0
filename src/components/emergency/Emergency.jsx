import React from "react";
import css from "../emergency/Emergency.module.css";
import image from "../../assets/HomeSection2Asset.svg";

export const Emergency = () => {
  return (
    <div className={css.main}>
      <div className={css.left}>
        <div className={css.main_img}>
          <img src={image} alt="emegency"></img>
        </div>
      </div>
      <div className={css.right}>
        <h1>Have an Emergency?</h1>
        <p>Are you under panic?</p>
        <p>Are you going through Trauma with no one to talk to?</p>
        <p>Communicate your way</p>
        <h3>Our Volunteers are available to hear you anyday! anytime!!</h3>
        <button className={css.chat}>Chat with Us!</button>
      </div>
    </div>
  );
};
