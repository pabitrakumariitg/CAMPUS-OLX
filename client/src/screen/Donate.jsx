import React from "react";
import "./Donate.css";

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

const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-top">
        <div className="donate-top-left">
          <label htmlFor="title">Title</label>
          <input className="input-title" type="text" id="title" name="title" />
          <label htmlFor="description">Description</label>
          <input
            className="input-desc"
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div className="donate-top-right">Show Uploaded Images Here</div>
      </div>

      <div className="donate-item-description">
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

      <div className="donate-item-upload">
        <button>Confirm</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Donate;
