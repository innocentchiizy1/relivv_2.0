import React from "react";
import "./App.css";
import { HomeScreen } from "./screens/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
}

export default App;
