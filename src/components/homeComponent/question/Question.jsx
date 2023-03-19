import React from "react";
import css from "../question/Question.module.css";
import question from "../../../assets/HaveAQuestionSect.svg";

export const Question = () => {
  return (
    <div>
      <div className={css.main}>
        <div className={css.left}>
          <img src={question} alt=""></img>
        </div>
        <div className={css.right}>
          <h1>Have a Question?</h1>
          <p>You can send a detailed query to our available volunteers!</p>
          <p>
            You dont have to wait to book a session. You can send your query for
            a quick reply from our volunteers!
          </p>
          <h3>We're here for you!</h3>
          <button className={css.chat}>Ask a healthy query now!</button>
        </div>
      </div>
    </div>
  );
};
