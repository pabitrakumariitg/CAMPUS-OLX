import React from "react";
import "./Profile.css";
import MyListItems from "../components/MyListItems";
import database from "./database.json";

const Profile = () => {

  const currentUser = JSON.parse(localStorage.getItem("chat-app-user"));

  console.log(currentUser.username);
  const userUploads = database.filter(
    (data) => data.userUploaded === currentUser.username
  );

  return (
    <div className="profile">
      <div className="profile-top">
        <div className="cover-pic">
          <img src="cover.jpg" alt="Cover" />
        </div>
        <div className="profile-pic">
          <img src="profile.jpg" alt="Profile" />
        </div>
      </div>
      <h1>YOUR NAME</h1>
      <div className="profile-info">
        <p>Hostel: Barak</p>
        <p>Course: BTech.</p>
        <p>Year: 2nd</p>
        <p>Branch: Mech</p>
        <p>Mobile No: +91 64156816885</p>
        <p>Outlook Id: b.pabitra@iitg.ac.in</p>
      </div>
      <button className="edit-profile">Edit Profile</button>
      <div className="myList">
        {userUploads.map((data, index) => (
          <MyListItems key={index} title={data.title} dateUploaded={2} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
