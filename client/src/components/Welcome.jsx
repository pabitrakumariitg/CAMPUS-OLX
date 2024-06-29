import React, { useState, useEffect } from "react";
import Robot from "../assets/robot.gif";
import "./Welcome.css"
const Welcome = ({currentUser}) => {
   
  return (
    <div className="welcome">
    <div className="welcome-content">
        <img src={Robot} alt="Robot" />
        <h1>
            Welcome, <span>{currentUser?.username}</span>!
        </h1>
        <h3>Please select a chat to start messaging.</h3>
    </div>
</div>
  )
}

export default Welcome