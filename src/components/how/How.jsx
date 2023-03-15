import React from "react";
import css from "../how/How.module.css";
import Doc from "../../assets/HowItWorksDocs.svg";
import Pick from "../../assets/HowItWorksPickVolunteer.svg";
import Select from "../../assets/startTherapyIcon.svg";
export const How = () => {
  return (
    <div>
      <div className={css.main}>
        <h1 className={css.how}>How it works</h1>
        <div className={css.list}>
          <div>
            <img src={Doc} alt=""></img>
            <h2>Brief Assesement </h2>
            <p>Answer a few questions about your preferences</p>
          </div>
          <div>
            <img src={Pick} alt=""></img>
            <h2>Pick Your Volunteer</h2>
            <p>Select from a list of recommendations</p>
          </div>
          <div>
            <img src={Select} alt=""></img>
            <h2>Start Session </h2>
            <p>Begin the journey towards a happier you</p>
          </div>
        </div>
        <button className={css.chat}>Chat with Us!</button>
      </div>
    </div>
  );
};
