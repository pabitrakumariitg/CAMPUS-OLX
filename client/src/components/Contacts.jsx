import React,{useState,useEffect} from 'react'
import "./Contacts.css"
const Contacts = ({contacts,currentUser,changeChat}) => {
    const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
      // Uncomment and use the actual avatar image field if available
      // setCurrentUserImage(currentUser.avatarImage);
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {/* {currentUserImage && currentUserImage && ( */}
      <div className="container-cont">
            <div className="brand">
                <img src={''} alt="logo" />
                <h3>Chat-box</h3>
            </div>
            <div className="users_">
                <div className="contacts">
                    {contacts.map((contact, index) => (
                        <div
                            key={contact._id}
                            className={`contact ${index === currentSelected ? "selected" : ""}`}
                            onClick={() => changeCurrentChat(index, contact)}
                        >
                            <div className="avatar">
                                <img src={''} alt="A" />
                            </div>
                            <div className="username">
                                <h3>{contact.username}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="current-user">
                    <div className="avatar">
                        <img src={''} alt="C" />
                    </div>
                    <div className="username">
                        <h2>{currentUserName}</h2>
                    </div>
                </div>
            </div>
        </div>
     {/* )} */}
    </>
  )
}

export default Contacts