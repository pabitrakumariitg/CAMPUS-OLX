import React from "react";
import "./Profile.css"
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-top">
        <div className="cover-pic">
          <img src="cover.jpg" alt="" />
        </div>
        <div className="profile-pic">
          <img src="profile.jpg" alt="" />
        </div>
      </div>
      <h1>YOUR NAME</h1>
      <div className="profile-info">
        <p>Hostel:Barak</p>
        <p>Course:BTech.</p>
        <p>Year:2nd</p>
        <p>Branch:Mech</p>
      
          <p>Mobile No: +91 64156816885</p>
          <p>Outlook Id: b.pabitra@iitg.ac.in</p>
       
      </div>

      <button className="edit-profile">Edit Profile</button>

      <div className="myList">
        
      </div>
    </div>
  );
};

export default Profile;
