import React from "react";
import "./HomeItem.css";
import table from "../assets/table.jpg";
import chat_icon from "../assets/chat.svg";
import profilePic from "../assets/profile.svg"; // Assuming you have a profile picture

const HomeItem = (props) => {
  return (
    <div className="selling-item">
      <div className="left">
        <img src={props.productImage} alt="Table"></img>
      </div>
      <div className="right">
        <div className="about">
          <div className="name-price">
            <h3>{props.title}</h3>
            <h2>${props.price}</h2>
          </div>
          <div className="desc">
            <p>{props.description.substring(0, 220)}{props.description.length > 220 ? '...' : ''}</p>
          </div>
        </div>
        <div className="profile_">
          <img className="profilepic" src={profilePic} alt="Profile"></img>
          <p className="name">{props.userUploaded}</p>
          <div className="chat">
            <img src={chat_icon} alt="Chat Icon"></img>
          </div>
          <p>{props.productType}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
