import React,{useRef,useState,useEffect} from 'react'
import "./ChatConatiner.css"
import ChatInput from './ChatInput';

const ChatContainer = ({currentChat,currentUser,socket}) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:8000/chat/getmsg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: currentUser._id,
            to: currentChat._id,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    if (currentChat) {
      fetchMessages();
    }
  }, [currentChat, currentUser._id]);
  const handleSendMsg = async (msg) => {
    try {
      const response = await fetch("http://localhost:8000/chat/addmsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: currentUser._id,
          to: currentChat._id,
          message: msg,
        }),
      });
       socket.current.emit("send-msg",{
        to: currentChat._id,
        from: currentUser._id,
        message:msg,
       })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Message sent successfully:", data);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


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
        <div className="chat-messages">
        {messages.map((message) => {
          return (
            // <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              {/* </div> */}
            </div>
          );
        })}
      </div>
        <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  )
}

export default ChatContainer
