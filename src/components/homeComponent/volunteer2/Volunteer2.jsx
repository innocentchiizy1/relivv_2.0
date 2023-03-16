import React from "react";
import css from "../volunteer2/Volunteer2.module.css";
import vol from "../../../assets/AreYouAVolunteer.svg";

export const Volunteer2 = () => {
  return (
    <div>
      <div className={css.main}>
        <div className={css.left}>
          <h1>Are you a Volunteer?</h1>
          <h4>Having any specialty in a range of:</h4>
          <ul className={css.list}>
            <li>Substance Abuse</li>
            <li>Parenting & Family Conflict</li>
            <li>Trauma & Stress</li>
            <li>Grief & Anxiety</li>
            <li>Relationships & Self Esteem</li>
            <li>Sexual Abuse & Rape</li>
          </ul>
          <h4>Help Students with Mental Health today!</h4>
          <button className={css.chat}>Sign Up here</button>
        </div>
        <div className={css.right}>
          <img src={vol} alt=""></img>
        </div>
      </div>
    </div>
  );
};
