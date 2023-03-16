import React from "react";
import css from "../volunteers/Volunteers.module.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaTransgender } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";

export const Volunteers = () => {
  return (
    <div className={css.main}>
      <div>
        <h1 className={css.vol}>Our Volunteers</h1>
      </div>
      <div className={css.list}>
        <div>
          <div className={css.circle}>
            <div className={css.icon}>
              <FaBrain />
            </div>
          </div>

          <h3>Mental Disorder</h3>
        </div>
        <div>
          <div className={css.circle}>
            <div className={css.icon}>
              <FaBriefcaseMedical />
            </div>
          </div>

          <h3>General Medicine</h3>
        </div>
        <div>
          <div className={css.circle}>
            <div className={css.icon}>
              <FaTransgender />
            </div>
          </div>

          <h3>Sexologist</h3>
        </div>
        <div>
          <div className={css.circle}>
            <div className={css.icon}>
              <FaHandHoldingHeart />
            </div>
          </div>

          <h3>Family and Parenting</h3>
        </div>
      </div>
    </div>
  );
};
