import React from "react";

const MyListItems = (props) => {
  return (
    <div className="MyListItems">
      <div className="item-list-left">
        <p>{props.title}</p>
        <p>{props.dateUploaded} days ago</p>
      </div>
      <div className="item-list-right">
        <button className="sold">Sold</button>
        <button className="edit">Edit</button>
      </div>
    </div>
  );
};

export default MyListItems;
