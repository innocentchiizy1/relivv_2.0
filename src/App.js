import "./App.css";
import { Emergency } from "./components/emergency/Emergency";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Health } from "./components/health/Health";
import { Hero } from "./components/hero/Hero";
import { How } from "./components/how/How";
import { Question } from "./components/question/Question";
import { Volunteer2 } from "./components/volunteer2/Volunteer2";
import { Volunteers } from "./components/volunteers/Volunteers";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Emergency />
      <Health />
      <Volunteers />
      <How />
      <Question />
      <Volunteer2 />
      <Footer/>
    </div>
  );
}

export default App;
