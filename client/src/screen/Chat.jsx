import React from 'react'
import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css"
import Contacts from '../components/Contacts';
import Welcome from '../components/Welcome';
import ChatContainer from '../components/ChatContainer';
const Chat = () => {
    const navigate = useNavigate(); 
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const fetchUser = async () => {
          const user = localStorage.getItem("chat-app-user");
          if (!user) {
            navigate("/login");
          } else {
            setCurrentUser(JSON.parse(user));
          }
        };
        fetchUser();
      }, [navigate]);


      useEffect(() => {
    const fetchContacts = async () => {
      if (currentUser) {
        try {
          const response = await fetch(`http://localhost:8000/chat/allusers/${currentUser._id}`);
          const data = await response.json();
          setContacts(data);
        } catch (error) {
          console.error("Failed to fetch contacts", error);
        }
      }
    };
    fetchContacts();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <div className='chat-container'>
        <div className="container-ch">
     <Contacts contacts={contacts} currentUser={currentUser}  changeChat={handleChatChange}></Contacts>
     {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat}  />
          )}
    </div>
    </div>
  )
}

export default Chat