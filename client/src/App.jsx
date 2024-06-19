import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./screen/Profile";
import Header from "./components/Header";
import Sell from "./screen/Sell";
import Donate from "./screen/Donate";
import Home from "./screen/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
