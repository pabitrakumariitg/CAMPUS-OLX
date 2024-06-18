import React from "react";
import "./Sell.css";

const hostels = [
  "Select Hostel",
  "Barak",
  "Brahmaputra",
  "Dihing",
  "Dhansiri",
  "Kameng",
  "Kapili",
  "Lohit",
  "Manas",
  "Siang",
  "Subansiri",
  "Umiam",
  "Disang",
 
  "Married Scholars",

];
const categories = [
  "Choose Your Category",
  "Phones",
  "Cars",
  "Bikes",
  "Electronics",
  "Furniture",
  "Books",
  "Clothing",
];

const Sell = () => {
  return (
    <div className="sell">
      <div className="sell-top">
        <div className="sell-top-left">
          <label htmlFor="title">Title</label>
          <input className="input-title" type="text" id="title" name="title" />
          <label htmlFor="description">Description</label>
          <input
            className="input-desc"
            type="text"
            id="description"
            name="description"
          />
          <label htmlFor="price">Price</label>
          <input className="input-price" type="text" id="price" name="price" />
        </div>
        <div className="sell-top-right">Show Uploaded Images Here</div>
      </div>

      <div className="sell-item-description">
        <button>Upload Images</button>
        <select name="hostel">
          {hostels.map((hostel, index) => (
            <option
              key={index}
              value={hostel.toLowerCase().replace(/\s+/g, "")}
            >
              {hostel}
            </option>
          ))}
        </select>
        <select name="category">
          {categories.map((category, index) => (
            <option
              key={index}
              value={category.toLowerCase().replace(/\s+/g, "")}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="sell-item-upload">
        <button>Confirm</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Sell;
