import React from 'react';
import './HomeItem.css';
import table from '../assets/table.jpg';
import chat_icon from '../assets/chat.svg';
import profilePic from '../assets/profile.svg'; // Assuming you have a profile picture

const HomeItem = () => {
  return (
    <div className='selling-item'>
      <div className='left'><img src={table} alt='Table'></img></div>
      <div className='right'>
        <div className='about'>
          <div className='name-price'>
          <h3>My old Table</h3>
          <h2>$700</h2>
          </div>
          <div className='desc'><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae reiciendis culpa quasi? Aliquam tenetur quia dolore, numquam iste velit minima beatae tempora sit nihil optio, necessitatibus dolor quidem ratione.s fjdncksdnckwlncwkldjeiwdjiwjldskc fndjknksmdksmd jndksjdksadmka djwkjd</p></div>
        </div>
        <div className='profile'>
          <img className='profilepic' src={profilePic} alt='Profile'></img>
          <h4 className='name'>Mansi</h4>
          <div className='chat'>
            Chat <img src={chat_icon} alt='Chat Icon'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
