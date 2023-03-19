import React from "react";
import "../../App.css";

import { Emergency } from "../../components/homeComponent/emergency/Emergency";
import { Hero } from "../../components/homeComponent/hero/Hero";
import { Footer } from './../../components/homeComponent/footer/Footer';
import { Volunteer2 } from './../../components/homeComponent/volunteer2/Volunteer2';
import { Volunteers } from './../../components/homeComponent/volunteers/Volunteers';
import { Header } from './../../components/homeComponent/header/Header';
import { Question } from './../../components/homeComponent/question/Question';
import { Health } from './../../components/homeComponent/health/Health';
import { How } from './../../components/homeComponent/how/How';

export const HomeScreen = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Emergency />
      <Health />
      <Volunteers />
      <How />
      <Question />
      <Volunteer2 />
      <Footer />
    </div>
  );
};
