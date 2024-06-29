import React,{useRef,useState} from 'react'
import "./ChatConatiner.css"
const ChatContainer = ({currentChat}) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  return (
    <div className='chatcontainer1'>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={""}
              alt="C"
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        </div>
        <div className='chat-msgs'>

        </div>
        <div className='chat-input'>

        </div>
    </div>
  )
}

export default ChatContainer
