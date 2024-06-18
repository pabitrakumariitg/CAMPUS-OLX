import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import bellicon from "../assets/notification.svg";

import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <h2>CampusOLX</h2>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/sell" className={({ isActive }) => (isActive ? "active" : "")}>
          Sell
        </NavLink>
        <NavLink to="/donate" className={({ isActive }) => (isActive ? "active" : "")}>
          Donate
        </NavLink>
        <NavLink to="/my-chats" className={({ isActive }) => (isActive ? "active" : "")}>
          My Chats
        </NavLink>
      </nav>
      <div className="icon-links">
        <NavLink to="/notifications" className="icon-link">
          <img src={bellicon} alt="Notifications" />
        </NavLink>
        <NavLink to="/profile" className="icon-link">
          <img src="profile.jpg" alt="Profile" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
